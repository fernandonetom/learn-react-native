/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import StyleSheet from './components/StyleSheet';
import StyledComponents from './components/StyledComponents';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StyledComponents);
