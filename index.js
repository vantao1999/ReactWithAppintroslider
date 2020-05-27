/**
 * @format
 */
/* eslint-disable prettier/prettier */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import HomeScreen from './src/screen/appintro';
import LoginScreen from './src/screen/login';
import { Navigation } from 'react-native-navigation';
import LoginPageScreen from './src/screen/LoginPage';
// import Icons from 'react-native-vector-icons/EvilIcons';


Navigation.registerComponent('Login', () => LoginScreen);
AppRegistry.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('LoginPage', () => LoginPageScreen);
Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home',
                        },
                    },
                ],
                options: {
                    topBar: {
                        visible: false,
                    },
                },
            },
        },
    });


});
