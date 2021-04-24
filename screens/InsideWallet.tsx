import React from 'react';
import { Button, Text, View } from 'react-native';
import { BottomTabNavProps } from '../global/types';

const InsideWallet: React.FC<BottomTabNavProps<'home'>> = ({ navigation, route }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Route name: {route.name}</Text>
    <Button title="go back" onPress={navigation.goBack} />
  </View>
);

export default InsideWallet;
