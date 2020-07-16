import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//SCREENS
import Home from '../pages/Home';
import About from '../pages/About';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Início',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0000FF',
          height: 200,
        },
        headerTitleStyle: {
          fontSize: 25,
          color: '#FFF',
        },
      }}
    />
    <MainStack.Screen
      name="Sobre"
      component={About}
      options={({route}) => ({
        title: route.params?.name ?? 'Visitante',
        headerStyle: {
          backgroundColor: route.params?.color ?? '#CCC',
        },
      })}
    />
  </MainStack.Navigator>
);
