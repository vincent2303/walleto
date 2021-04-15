import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabNavProps } from '../screenRoutes';

const WalletList = ({ navigation, route }: BottomTabNavProps<'walletList'>) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Route name: {route.name}</Text>
    <Button title="insideWallet" onPress={() => navigation.navigate('insideWallet')} />
    <Button title="newWallet" onPress={() => navigation.navigate('newWallet')} />
  </View>
);

export default WalletList;
