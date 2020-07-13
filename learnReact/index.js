/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './components/App';
import StyleSheet from './components/StyleSheet';
import StyledComponents from './components/StyledComponents';
import FlexBox1 from './components/flexbox1';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexBox1);
