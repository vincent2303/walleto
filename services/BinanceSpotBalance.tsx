import axios from 'axios';
import { WalletBalance, TokenPrices } from '../global/types';
import { MINIMUM_BALANCE, binanceAPIKey, secret } from './tempConfig.json';

import createHmacString from './utils';

type BinancePriceObject = {
    price:string,
    symbol:string
}

type BinanceBalanceObject = {
    asset:string
    free:number
};

const getBinanceTime = async (): Promise<string> => {
  try {
    const response = await axios.get('https://api.binance.com/api/v1/time');
    return response.data.serverTime.toString();
  } catch (error) {
    return error;
  }
};

const getBinanceBalance = async () => {
  try {
    const binanceTime:string = await getBinanceTime();
    const config = {
      headers: { 'X-MBX-APIKEY': binanceAPIKey },
      params: {
        timestamp: binanceTime,
        signature: createHmacString(secret, `timestamp=${binanceTime}`),
      },
    };
    const response = await axios.get('https://api.binance.com/api/v3/account', config);
    return response.data.balances;
  } catch (error) {
    return error;
  }
};

const getBinancePrices = async () => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/ticker/price');
    return response.data;
  } catch (error) {
    return error;
  }
};

const parseBinanceBalance = (
  pricesResponse:BinancePriceObject[], balanceResponse:BinanceBalanceObject[],
):[WalletBalance, TokenPrices] => {
  const allPairs:TokenPrices = new Map(
    pricesResponse.map((pair:BinancePriceObject) => [pair.symbol, +pair.price]),
  );

  const filteredResponse = balanceResponse.filter(
    (token:BinanceBalanceObject) => token.free > MINIMUM_BALANCE,
  );

  const wallet:WalletBalance = new Map(
    filteredResponse.map((token:BinanceBalanceObject) => [token.asset, +token.free]),
  );

  const bitcoinPriceUSDT = allPairs.get('BTCUSDT')!;

  const walletUSDPrices:TokenPrices = new Map(
    filteredResponse.map((token:BinanceBalanceObject) => {
      const usdTicker = `${token.asset}USDT`;
      let usdPrice = 0;
      // Check if usd pair exist
      if (allPairs.has(usdTicker)) {
        usdPrice = allPairs.get(usdTicker)!;
      } else {
        // Check if bitcoin pair exist
        const btcTicker = `${token.asset}BTC`;
        if (allPairs.has(btcTicker)) {
          usdPrice = allPairs.get(btcTicker)! * bitcoinPriceUSDT;
        }
      }
      return [token.asset, usdPrice];
    }),
  );

  if (walletUSDPrices.has('BTC')) {
    walletUSDPrices.set('BTC', bitcoinPriceUSDT);
  }

  if (walletUSDPrices.has('EUR')) {
    walletUSDPrices.set('EUR', allPairs.get('EURUSDT')!);
  }
  // Set usdt to 1$
  walletUSDPrices.set('USDT', 1);
  return [wallet, walletUSDPrices];
};

const computeBinanceWallet = async () => {
  const [pricesResponse, balanceResponse] = await Promise.all(
    [getBinancePrices(), getBinanceBalance()],
  );
  return parseBinanceBalance(pricesResponse, balanceResponse);
};

export default computeBinanceWallet;
