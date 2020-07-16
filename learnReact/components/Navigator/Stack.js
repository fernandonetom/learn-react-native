import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//SCREENS
import Home from '../pages/Home';
import About from '../pages/About';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Sobre" component={About} />
  </MainStack.Navigator>
);
