import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from './CustomTabBar';

import HomeStack from './HomeStack';
import TabAboutScreen from '../pages/TabAbout';
import TabConfigScreen from '../pages/TabConfigScreen';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="TabHome"
    tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="TabAbout"
      component={TabAboutScreen}
      options={{
        tabBarLabel: 'Sobre nós',
      }}
    />
    <Tab.Screen
      name="TabHome"
      component={HomeStack}
      options={{
        tabBarLabel: 'Página inicial',
      }}
    />
    <Tab.Screen
      name="TabConfig"
      component={TabConfigScreen}
      options={{
        tabBarLabel: 'Ajustes',
      }}
    />
  </Tab.Navigator>
);
