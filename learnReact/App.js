import React from 'react';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './components/Navigator/Stack';
import MainTab from './components/Navigator/Tab';
import {Provider} from 'react-redux';
import {store, persistor} from './components/Store';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainTab />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
