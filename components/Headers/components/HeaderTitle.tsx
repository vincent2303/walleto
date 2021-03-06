import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors, fontSizes } from '../../../global/styles';

interface Props {
  title: string
}

const HeaderTitle: React.FC<Props> = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    textTransform: 'uppercase',
    fontSize: fontSizes.big,
    fontWeight: '800',
  },
});

export default HeaderTitle;
