import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../global/styles';

const HeaderContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 65,
    padding: dimensions.unit * 2,
    backgroundColor: colors.darkBlack,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
});

export default HeaderContainer;
