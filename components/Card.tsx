import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, dimensions, fontSizes } from '../global/styles';
import { WalletData } from '../global/types';

interface Props {
    walletData: WalletData,
    colorIndex: number,
}

const cardColors = [
  colors.red,
  colors.blue,
  colors.orange,
  colors.purple,
  colors.green,
  colors.rose,
];

const CardContainer = ({ walletData, colorIndex } : Props) => {
  const {
    name, address, usdValue, date,
  } = walletData;
  const colorStyle = StyleSheet.create({
    container: {
      backgroundColor: cardColors[colorIndex],
    },
  });
  const container = StyleSheet.flatten([styles.container, colorStyle.container]);
  return (
    <View style={container}>
      <View style={styles.row}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textValues}>${usdValue}</Text>
      </View>
      <Text style={styles.textAddress} numberOfLines={1}>{address}</Text>
      <Text style={styles.textDate}>{date.toISOString().split('T')[0]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 2,
    borderRadius: 10,
    padding: dimensions.unit * 1.5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    fontSize: fontSizes.big,
    fontWeight: '700',
    color: colors.white,
  },
  textValues: {
    fontSize: fontSizes.big,
    fontWeight: '700',
    color: colors.white,
  },
  textAddress: {
    width: '70%',
    fontSize: fontSizes.big,
    fontWeight: '300',
    color: colors.white,
  },
  textDate: {
    paddingTop: 100,
    fontSize: fontSizes.medium,
    fontWeight: '300',
    color: colors.white,
    textAlignVertical: 'bottom',
    textAlign: 'right',
  },
});

export default CardContainer;
