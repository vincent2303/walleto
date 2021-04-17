import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors } from '../global/styles';

interface Props {
  children: JSX.Element | JSX.Element[],
  style?: ViewStyle
}

const AppScreenContainer: React.FC<Props> = ({ children, style }) => (
  <View style={{ ...styles.container, ...style }}>
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
