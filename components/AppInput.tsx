import React from 'react';
import {
  View, StyleSheet, Text, TextInput, ViewStyle,
} from 'react-native';
import { colors, dimensions, fontSizes } from '../global/styles';

interface Props {
  title: string,
  value: string,
  onchangeText: any,
  style?: ViewStyle
}

const AppInput: React.FC<Props> = ({
  title, value, style, onchangeText,
}) => (
  <View style={style}>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      style={styles.input}
      onChangeText={onchangeText}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: '500',
  },
  input: {
    backgroundColor: colors.darkBlack,
    padding: dimensions.unit * 2,
    fontSize: fontSizes.big,
    color: colors.white,
    fontWeight: '300',
    marginTop: dimensions.unit,
    borderRadius: 5,
  },
});

export default AppInput;
