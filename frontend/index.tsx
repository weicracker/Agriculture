import App from './hello';
import { AppRegistry } from 'react-native';

// rendering (using ReactDOM.render also works)
const rootTag = document.getElementById('react-root');
AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag });