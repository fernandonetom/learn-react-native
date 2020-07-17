import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './components/Navigator/Stack';
import MainTab from './components/Navigator/Tab';
import {Provider} from 'react-redux';
import Store from './components/Store';

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </Provider>
  );
};
