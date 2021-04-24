import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type ParamList = {
  home: undefined,
  walletList: undefined,
  overview: undefined,
  insideWallet: undefined,
  newWallet: undefined,
}

export type StackNavProps<T extends keyof ParamList> = {
  navigation: StackNavigationProp<ParamList, T>,
  route: RouteProp<ParamList, T>
}

export type BottomTabNavProps<T extends keyof ParamList> = {
  navigation: BottomTabNavigationProp<ParamList, T>,
  route: RouteProp<ParamList, T>
}

export type TokenPrices = Map<string, number | undefined>;
export type WalletBalance = Map<string, Number>;

export type WalletData = {
  name:string,
  address:string,
  date:Date,
  usdValue:number,
  balance:WalletBalance,
};
