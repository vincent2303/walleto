import React from 'react';
import { View } from 'react-native';
import AppScreenContainer from '../components/AppScreenContainer';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import Card from '../components/Card';
import { dimensions } from '../global/styles';

import { WalletCardData } from '../global/types';

const walletData:WalletCardData = {
  name: 'My wallet',
  usdValue: 300,
  date: new Date('2019-01-16'),
  address: 'àxzieaozijoizjooazdavvsvsdsdfsdfsdsfvozijda',
};

const Overview: React.FC<{}> = () => (
  <AppScreenContainer>
    <PrimaryHeader title="overview" />
    <View style={{ padding: dimensions.unit * 2 }}>
      <Card walletData={walletData} colorIndex={1} />
    </View>
  </AppScreenContainer>
);

export default Overview;
