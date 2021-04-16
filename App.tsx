import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ParamList } from './global/types';
import { colors } from './global/styles';

import WalletList from './screens/WalletList';
import Overview from './screens/Overview';
import NewWallet from './screens/NewWallet';
import InsideWallet from './screens/InsideWallet';

const Stack = createStackNavigator<ParamList>();
const Tab = createBottomTabNavigator<ParamList>();

const homeBottomTab = () => (
  <Tab.Navigator tabBarOptions={{ style: styles.bottomTabBar }}>
    <Tab.Screen name="walletList" component={WalletList} />
    <Tab.Screen name="overview" component={Overview} />
  </Tab.Navigator>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="home" component={homeBottomTab} />
        <Stack.Screen name="insideWallet" component={InsideWallet} />
        <Stack.Screen name="newWallet" component={NewWallet} />
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar barStyle="light-content" />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: colors.darkBlack,
  },
  bottomTabBar: {
    backgroundColor: colors.darkBlack,
  },
});

export default App;
