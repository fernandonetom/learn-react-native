import {createStore} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import Reducers from './Reducers';

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['userReducer'],
    //blacklist:[]
  },
  Reducers,
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);
export {store, persistor};
