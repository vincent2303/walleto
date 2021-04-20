import axios from 'axios';
import { Wallet, TokenData, Pair } from '../global/types';
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
):Wallet => {
  const prices:Pair = new Map(
    pricesResponse.map((pair:BinancePriceObject) => [pair.symbol, +pair.price]),
  );

  const wallet:Wallet = new Map(
    balanceResponse
      .filter((token:BinanceBalanceObject) => token.free > MINIMUM_BALANCE)
      .map((token:BinanceBalanceObject) => {
        let tokenInfo = {} as TokenData;
        if (token.asset === 'USDT') {
          tokenInfo = { balance: +token.free, price: 1 };
        } else {
          const ticker = `${token.asset}USDT`;
          tokenInfo = { balance: +token.free, price: prices.get(ticker) };
        }
        return [token.asset, tokenInfo];
      }),
  );
  // ADD BTC price if not already in wallet
  if (Object.prototype.hasOwnProperty.call(wallet, 'BTC')) {
    wallet.set('BTC', {
      balance: 0,
      price: prices.get('BTCUSDT'),
    });
  }

  // ADD EUR price if not already in wallet
  if (Object.prototype.hasOwnProperty.call(wallet, 'EUR')) {
    wallet.set('EUR', {
      balance: 0,
      price: prices.get('EURUSDT'),
    });
  }
  return wallet;
};

// eslint-disable-next-line no-unused-vars
const computeBinanceWallet = async () => {
  const [pricesResponse, balanceResponse] = await Promise.all(
    [getBinancePrices(), getBinanceBalance()],
  );
  return parseBinanceBalance(pricesResponse, balanceResponse);
};

export default computeBinanceWallet;
