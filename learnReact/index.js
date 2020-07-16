/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import StyleSheet from './components/StyleSheet';
import StyledComponents from './components/StyledComponents';
import FlexBox1 from './components/flexbox1';
import PropsStates from './components/PropsStates';
import Button from './components/Button';
import Condicional from './components/Condicional';
import Gorjetas from './components/Gorjetas';
import Keyboard from './components/Keyboard';
import Image from './components/Image';
import Lista from './components/Lista';
import Touchable from './components/Touchable';
import FlatList from './components/FlatList';
import AsyncStorage from './components/AsyncStorage';
import Modal from './components/Modal';
import StatusBar from './components/StatusBar';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StatusBar);
