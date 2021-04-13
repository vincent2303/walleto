import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WalletsScreen from './screens/WalletsScreen';
import OverviewScreen from './screens/OverviewScreen';
import InsideWalletScreen from './screens/InsideWalletScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigatorScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="wallets" component={WalletsScreen} />
    <Tab.Screen name="overview" component={OverviewScreen} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigatorScreen} />
        <Stack.Screen name="insideWallet" component={InsideWalletScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
