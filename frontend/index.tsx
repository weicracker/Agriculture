import App from './hello';
import { AppRegistry } from 'react-native';

const rootTag = document.getElementById('react-root');
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag });