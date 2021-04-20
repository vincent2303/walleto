import axios from 'axios';
import { Wallet, TokenData } from '../global/types';
import { addresses, ETHAPiKey } from './tempConfig.json';

type Tokens = {
    balance:number,
    tokenInfo: {
                decimals:number,
                symbol:string,
                price: {rate:number}
                }
  }

type EthplorerResponse = {
  ETH:{balance:number,
      price:{rate:number}
   },
  tokens:Tokens[]
  }

const computeERC20AddressWallet = async (address:string):Promise<Wallet> => {
  try {
    const response = await axios.get(`https://api.ethplorer.io/getAddressInfo/${address}${ETHAPiKey}`);
    return parseEthplorerResponse(response.data);
  } catch (error) {
    return error;
  }
};

const parseEthplorerResponse = (response:EthplorerResponse):Wallet => {
  // Store ETH balance and price
  const { balance: ethBalance, price: { rate: price } } = response.ETH;
  const ethInfo:TokenData = { balance: ethBalance, price };
  // Store tokens balances and prices
  const wallet:Wallet = new Map(response.tokens
    .filter((token:Tokens) => token.tokenInfo.symbol !== '')
    .map((token:Tokens) => {
      const { balance } = token;
      const { decimals, symbol, price: { rate: tokenPrice } } = token.tokenInfo;
      // check for valid tokens
      const tokenData:TokenData = { balance: balance * 10 ** -decimals, price: tokenPrice };
      return [symbol, tokenData];
    }));
  wallet.set('ETH', ethInfo);
  return wallet;
};

const fetchAdressesWallet = async () => {
  const addressesWallet:Promise<Wallet>[] = [];
  addresses.forEach(async (address) => {
    const erc20Wallet = computeERC20AddressWallet(address);
    addressesWallet.push(erc20Wallet);
  });
  const wallets = await Promise.all(addressesWallet);
  return wallets;
};

export default fetchAdressesWallet;
