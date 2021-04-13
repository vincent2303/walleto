import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WalletsScreen from './screens/WalletsScreen';
import OverviewScreen from './screens/OverviewScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="wallets" component={WalletsScreen} />
        <Tab.Screen name="overview" component={OverviewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
