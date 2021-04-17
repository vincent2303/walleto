import React from 'react';
import { View } from 'react-native';
import PrimaryHeader from '../components/Headers/PrimaryHeader';
import AppScreenContainer from '../components/AppScreenContainer';
import AddCard from '../components/AddCard';
import { dimensions } from '../global/styles';

const WalletList = () => (
  <AppScreenContainer>
    <PrimaryHeader title="wallet list" />
    <View style={{ padding: dimensions.unit * 2 }}>
      <AddCard />
    </View>
  </AppScreenContainer>
);

export default WalletList;
