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
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = null;
        switch (route.name) {
          case 'TabHome':
            iconName = 'home';
            break;
          case 'TabAbout':
            iconName = 'info';
            break;
          default:
            break;
        }
        return (
          <Icon
            name={iconName}
            size={20}
            color={focused ? '#ff6666' : '#333'}
          />
        );
      },
    })}>
    <Tab.Screen name="TabHome" component={TabHomeScreen} />
    <Tab.Screen name="TabAbout" component={TabAboutScreen} />
  </Tab.Navigator>
);
