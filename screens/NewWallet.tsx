import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavProps } from '../screenRoutes';

const NewWallet = ({ navigation, route }: StackNavProps<'home'>) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Route name: {route.name}</Text>
    <Button title="go back" onPress={navigation.goBack} />
  </View>
);

export default NewWallet;
