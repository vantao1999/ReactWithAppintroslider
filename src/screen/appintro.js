/* eslint-disable prettier/prettier */

import React from 'react';
import { StyleSheet, View, Text, Image, AppRegistry } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icons from 'react-native-vector-icons/EvilIcons';
// import bottomTab from '../Navigation/bottomTab';
import loginNav from '../Navigation/loginNav';


const slides = [
    {
        key: 1,
        text: 'Thân Thiện - Tiện Lợi',
        image: require('../images/first.jpg'),
        backgroundColor: '#59b2ab',
    },
    {
        key: 2,
        text: '100% Bảo Mật',
        image: require('../images/protect.png'),
        backgroundColor: '#febe29',
    },
    {
        key: 3,
        text: 'Tiết Kiệm Thời Gian',
        image: require('../images/third.jpg'),
        backgroundColor: '#22bcb5',
    },
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
        };
    }

    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={item.image} resizeMode={'contain'} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    _onDone = ({ componentId }) => {
        // this.setState({ showRealApp: true });
        loginNav();
    };
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icons
                    name="chevron-right"
                    color="rgba(255, 255, 255, .9)"
                    size={40}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icons
                    name="check"
                    color="rgba(255, 255, 255, .9)"
                    size={40}
                />
            </View>
        );
    };
    render() {
        if (this.state.showRealApp) {
            return <App />;
        } else {
            return (
                <AppIntroSlider
                    renderItem={this._renderItem}
                    data={slides}
                    onDone={this._onDone}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    activeDotStyle={{ backgroundColor: '#3c64aa' }}
                />
            );
        }
    }
}
const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#489bff',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#3c64aa',
        alignSelf: 'center',
    },
    image: {
        width: '100%',
        height: 400,
        marginTop: 20,
    },
});
