import React from 'react';
import { StyleSheet } from 'react-native';
import SecondaryHeader from '../components/Headers/SecondaryHeader';
import AppScreenContainer from '../components/AppScreenContainer';
import AppInput from '../components/AppInput';
import { dimensions } from '../global/styles';

const NewWallet = () => (
  <>
    <SecondaryHeader title="new wallet" />
    <AppScreenContainer style={styles.container}>
      <AppInput />
    </AppScreenContainer>
  </>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.unit * 2,
    paddingTop: dimensions.unit * 3,
  },
});

export default NewWallet;
