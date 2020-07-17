import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './components/Navigator/Stack';
import MainTab from './components/Navigator/Tab';

export default () => {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
};
