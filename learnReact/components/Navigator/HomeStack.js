import React from 'react';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//SCREENS
import TabHome from '../pages/TabHome';
import Screen2 from '../pages/Screen2';
import Screen3 from '../pages/Screen3';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen name="TabHome" component={TabHome} />
    <MainStack.Screen name="Screen2" component={Screen2} />
    <MainStack.Screen name="Screen3" component={Screen3} />
  </MainStack.Navigator>
);
