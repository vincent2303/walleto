import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../global/styles';

interface Props {
  title: string
}

const BackNavigationButton: React.FC<Props> = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
      <Entypo name="chevron-small-left" size={30} color={colors.darkBlue} />
      <Text style={{ fontSize: 24, color: colors.darkBlue }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackNavigationButton;
