/**
 * @format
 */

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

import { createStore } from 'redux'

import reducer from './App/Redux/Store/reducer'

const store = createStore(reducer)

import { AppRegistry } from 'react-native';
import App from './App/Containers/App';
import { name as appName } from './app.json';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Remote debugger'])

AppRegistry.registerComponent(appName, () => App);
