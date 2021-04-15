import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabNavProps } from '../types/screenRoutes';

const Overview = ({ navigation, route }: BottomTabNavProps<'home'>) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Route name: {route.name}</Text>
    <Button title="insideWallet" onPress={() => navigation.navigate('insideWallet')} />
  </View>
);

export default Overview;
