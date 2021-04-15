import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ParamList } from './screenRoutes';

import WalletList from './screens/WalletList';
import Overview from './screens/Overview';
import NewWallet from './screens/NewWallet';
import InsideWallet from './screens/InsideWallet';

const Stack = createStackNavigator<ParamList>();
const Tab = createBottomTabNavigator<ParamList>();

const homeBottomTab = () => (
  <Tab.Navigator>
    <Tab.Screen name="walletList" component={WalletList} />
    <Tab.Screen name="overview" component={Overview} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="home" component={homeBottomTab} />
      <Stack.Screen name="insideWallet" component={InsideWallet} />
      <Stack.Screen name="newWallet" component={NewWallet} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
