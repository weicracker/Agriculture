import * as React from 'react';
import Header from './compontent/header/header';
import {
    // apis
    Animated,
    AppState,
    AsyncStorage,
    Clipboard,
    Dimensions,
    I18nManager,
    NetInfo,
    PanResponder,
    PixelRatio,
    StyleSheet,
    // components
    ActivityIndicator,
    Button,
    Image,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});
class App extends React.Component<any, undefined>{
    render() {
        return (
            <View style={styles.container}>
                <Header name = "aaaa">
                    
                </Header>
                <Text>React Native for Web</Text>
            </View>
        );
    }
}
export default App;
