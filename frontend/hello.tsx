import * as React from 'react';
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
    ProgressBar,
    ScollView,
    Switch,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    View
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>React Native for Web</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
});