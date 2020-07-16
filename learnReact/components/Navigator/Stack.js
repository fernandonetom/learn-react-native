import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//SCREENS
import Home from '../pages/Home';
import About from '../pages/About';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Calculadora" component={Home} />
    <MainStack.Screen name="Modal page" component={About} />
  </MainStack.Navigator>
);
