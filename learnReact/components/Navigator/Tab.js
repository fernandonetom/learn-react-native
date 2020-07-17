import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from '../pages/TabHome';
import TabAboutScreen from '../pages/TabAbout';
import Icon from 'react-native-vector-icons/Feather';
Icon.loadFont();
const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabel: 'Valor padrão',
    }}>
    <Tab.Screen
      name="TabHome"
      component={TabHomeScreen}
      options={{
        tabBarLabel: 'Página inicial',
        tabBarIcon: ({focused}) => {
          return (
            <Icon name="home" size={20} color={focused ? '#FF0000' : '#333'} />
          );
        },
      }}
    />
    <Tab.Screen
      name="TabAbout"
      component={TabAboutScreen}
      options={{
        tabBarLabel: 'Sobre nós',
        tabBarIcon: ({focused}) => {
          return (
            <Icon name="info" size={20} color={focused ? '#FF0000' : '#333'} />
          );
        },
      }}
    />
  </Tab.Navigator>
);
