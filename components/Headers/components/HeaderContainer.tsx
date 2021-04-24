import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, dimensions } from '../../../global/styles';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const HeaderContainer: React.FC<Props> = ({ children }) => (
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
