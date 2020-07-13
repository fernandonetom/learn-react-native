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

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Button);
