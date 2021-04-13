import React from 'react';
import { Button, Text, View } from 'react-native';

const OverviewScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Wallets screen</Text>
    <Button
      title="Go to inside wallet"
      onPress={() => navigation.navigate('insideWallet')}
    />
  </View>
);

export default OverviewScreen;
