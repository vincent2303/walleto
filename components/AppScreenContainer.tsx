import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../global/styles';

const AppScreenContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default AppScreenContainer;
