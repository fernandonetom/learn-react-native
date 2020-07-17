import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../pages/TabHome';
import TabAboutScreen from '../pages/TabAbout';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="TabHome" component={TabHomeScreen} />
    <Tab.Screen name="TabAbout" component={TabAboutScreen} />
  </Tab.Navigator>
);
