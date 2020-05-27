/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Navigation } from 'react-native-navigation';
const DisplayLogin = ({ componentId }) => {

    const onPress = () => {
        Navigation.push(componentId, {
            component: {
                name: 'LoginPage',
            },
        });
    };
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.loginTitle}>
                    <Text style={styles.text}>Hương Vị Quê Nhà</Text>
                </View>
                <View style={styles.viewImage}>
                    <Image style={styles.image} source={require('../images/login.png')} />
                </View>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={styles.btnLogin}>
                        <Text style={styles.btnText}>Đăng Nhập</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={styles.btnSignup}>
                        <Text style={styles.btnsignupText}>Đăng Ký</Text>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

        </SafeAreaView>
    );
};

export default DisplayLogin;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    loginTitle: {
        alignItems: 'center',
        marginTop: 70,
    },
    text: {
        color: '#222b45',
        fontSize: 35,
        marginHorizontal: 20,
    },
    viewContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#c1baba',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    viewImage: {
        alignItems: 'center',
        marginVertical: 20,
    },
    image: {
        width: '80%',
        resizeMode: 'contain',
        height: 250,
    },

    btnLogin: {
        borderRadius: 20,
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#489bff',

    },
    btnSignup: {
        marginTop: 40,
        borderWidth: 0.5,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    btnText: {
        color: '#ffffff',
        fontSize: 20,
    },
    btnsignupText: {
        fontSize: 20,
        fontFamily: 'notoserif',
    },
});
