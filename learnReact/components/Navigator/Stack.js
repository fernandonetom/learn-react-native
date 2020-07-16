import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//SCREENS
import Home from '../pages/Home';
import About from '../pages/About';
import ChangeStyles from '../pages/ChangeStyles';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#66FF',
      },
      headerTitleStyle: {
        color: '#000',
      },
    }}>
    <MainStack.Screen name="Styles" component={ChangeStyles} />
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Sobre" component={About} />
  </MainStack.Navigator>
);
