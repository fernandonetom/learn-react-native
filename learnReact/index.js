/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StyleSheet from './StyleSheet';
import StyledComponents from './StyledComponents';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StyledComponents);
