/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import SendEmail from './components/SendEmail';
import WelcomePage from './components/WelcomePage';

AppRegistry.registerComponent(appName, () => App);
