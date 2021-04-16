import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { colors, dimensions, fontSizes } from '../global/styles';

const HeaderContainer = () => (
  <TouchableOpacity style={styles.container}>
    <View style={styles.addButtonContainer}>
      <AntDesign name="plus" size={40} color="white" />
    </View>
    <Text style={styles.addText}>Add new wallet</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.transparentBlue,
    width: '100%',
    aspectRatio: 2,
    borderRadius: 10,
    padding: dimensions.unit * 2,
    justifyContent: 'space-between',
  },
  addButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    fontSize: fontSizes.big,
    fontWeight: '300',
    color: colors.blue,
  },
});

export default HeaderContainer;
