import axios from 'axios';
import { Wallet, TokenPrices } from '../global/types';
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
):[Wallet, TokenPrices] => {
  const allPairs:TokenPrices = new Map(
    pricesResponse.map((pair:BinancePriceObject) => [pair.symbol, +pair.price]),
  );

  const filteredResponse = balanceResponse.filter(
    (token:BinanceBalanceObject) => token.free > MINIMUM_BALANCE,
  );

  const wallet:Wallet = new Map(
    filteredResponse.map((token:BinanceBalanceObject) => [token.asset, +token.free]),
  );

  const prices:TokenPrices = new Map(
    filteredResponse.map((token:BinanceBalanceObject) => {
      const ticker = `${token.asset}USDT`;
      return [token.asset, allPairs.get(ticker)];
    }),
  );
  // ADD BTC price if not already in wallet
  if (Object.prototype.hasOwnProperty.call(prices, 'BTC')) {
    prices.set('BTC', prices.get('BTCUSDT'));
  }

  // ADD EUR price if not already in wallet
  if (Object.prototype.hasOwnProperty.call(wallet, 'EUR')) {
    prices.set('EUR', prices.get('EURUSDT'));
  }
  return [wallet, prices];
};

// eslint-disable-next-line no-unused-vars
const computeBinanceWallet = async () => {
  const [pricesResponse, balanceResponse] = await Promise.all(
    [getBinancePrices(), getBinanceBalance()],
  );
  console.log(parseBinanceBalance(pricesResponse, balanceResponse));
  return parseBinanceBalance(pricesResponse, balanceResponse);
};

export default computeBinanceWallet;
