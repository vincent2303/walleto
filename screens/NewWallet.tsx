import React from 'react';
import { StyleSheet, View } from 'react-native';
import SecondaryHeader from '../components/Headers/SecondaryHeader';
import AppScreenContainer from '../components/AppScreenContainer';
import AppInput from '../components/AppInput';
import { dimensions } from '../global/styles';

const NewWallet: React.FC<{}> = () => {
  const [walletName, onChangeWalletName] = React.useState('');
  const [walletAddress, onChangeWalletAddress] = React.useState('');
  return (
    <>
      <SecondaryHeader title="new wallet" />
      <AppScreenContainer style={styles.container}>
        <AppInput title="Wallet name" value={walletName} onchangeText={onChangeWalletName} style={styles.input} />
        <AppInput title="Wallet address" value={walletAddress} onchangeText={onChangeWalletAddress} style={styles.input} />
      </AppScreenContainer>
      <View style={{ height: 100, backgroundColor: 'red' }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.unit * 2,
  },
  input: {
    marginTop: dimensions.unit * 3,
  },
});

export default NewWallet;
