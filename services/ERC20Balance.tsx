import axios from 'axios';
import { WalletBalance, TokenPrices } from '../global/types';
import { addresses, ETHAPiKey } from './tempConfig.json';

type TokensResponse = {
  balance: number,
  tokenInfo: {
    address:string,
    decimals: number,
    symbol: string,
    price: {rate:number}
  }
}

type EthplorerResponse = {
  ETH: {balance: number,
    price: {rate: number}
  },
  tokens: TokensResponse[]
}

const getERC20AddressWallet = async (address:string):Promise<[WalletBalance, TokenPrices]> => {
  try {
    const response = await axios.get(`https://api.ethplorer.io/getAddressInfo/${address}${ETHAPiKey}`);
    return parseEthplorerResponse(response.data);
  } catch (error) {
    const w:WalletBalance = new Map();
    const t:TokenPrices = new Map();
    return [w, t];
  }
};

const parseEthplorerResponse = (response:EthplorerResponse):[WalletBalance, TokenPrices] => {
  const { balance: ethBalance, price: { rate: ethPrice } } = response.ETH;

  response.tokens = response.tokens.filter((token:TokensResponse) => token.tokenInfo.symbol !== '');
  const prices:TokenPrices = new Map(response.tokens
    .map((token:TokensResponse) => {
      const { symbol, price: { rate: price } } = token.tokenInfo;
      return [symbol, price];
    }));

  const wallet:WalletBalance = new Map(response.tokens
    .map((token:TokensResponse) => {
      const { balance, tokenInfo: { symbol } } = token;
      return [symbol, balance];
    }));

  wallet.set('ETH', ethBalance);
  prices.set('ETH', ethPrice);
  return [wallet, prices];
};

const formatData = (data:[WalletBalance, TokenPrices][]): [WalletBalance[], TokenPrices] => {
  const walletList:WalletBalance[] = [];
  const tokensMap:TokenPrices = new Map();

  data.forEach(([wallet, token]) => {
    walletList.push(wallet);
    token.forEach((value, key) => tokensMap.set(key, value));
  });
  return [walletList, tokensMap];
};

const computeWalletsfromERC20 = async () => {
  const addressesWallet:Promise<[WalletBalance, TokenPrices]>[] = [];
  addresses.forEach(async (address) => {
    addressesWallet.push(getERC20AddressWallet(address));
  });
  const addressesData = await (await Promise.all(addressesWallet));
  return formatData(addressesData);
};

export default computeWalletsfromERC20;
