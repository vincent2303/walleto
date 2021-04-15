import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabNavProps } from '../screenRoutes';

const InsideWallet = ({ navigation, route }: BottomTabNavProps<'home'>) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Route name: {route.name}</Text>
    <Button title="go back" onPress={navigation.goBack} />
  </View>
);

export default InsideWallet;
