import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
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
            color={focused ? '#0000dd' : '#333'}
          />
        );
      },
    })}
    //lazy={true}
    tabBarOptions={{
      //   activeTintColor: '#ff0000',
      //   activeBackgroundColor: '#ccc',
      //   style: {
      //     height: 150,
      //   },
      //   labelPosition: 'beside-icon',
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen
      name="TabHome"
      component={HomeStack}
      options={{
        tabBarLabel: 'Página inicial',
      }}
    />
    <Tab.Screen
      name="TabAbout"
      component={TabAboutScreen}
      options={{
        tabBarLabel: 'Sobre nós',
      }}
    />
  </Tab.Navigator>
);
