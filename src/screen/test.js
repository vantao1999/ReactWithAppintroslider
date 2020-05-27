/* eslint-disable prettier/prettier */
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
const DisplayTest = () => {
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ backgroundColor: '#f9c390' }}>
                    <Text style={styles.text}>Good Morning Thanh Phan</Text>
                </View>
                <View style={{ marginHorizontal: 20, height: 400, overflow: 'hidden' }}>
                    <Image style={styles.image} source={require('../images/news.png')} />
                </View>
                <View style={styles.viewContainer}>

                    <View style={styles.icon}>
                        <Icon name="like" size={30} color="#900" />
                        <Text>Like</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="comment" size={30} color="#900" />
                        <Text>Comments</Text>
                    </View>
                    <View style={styles.icon}>
                        <Icon name="sc-telegram" size={30} color="#900" />
                        <Text>Share</Text>
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default DisplayTest;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    text: {
        color: '#222b45',
        fontSize: 45,
        fontWeight: 'bold',
        paddingTop: 20,
        marginHorizontal: 20,
    },
    viewContainer: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#c1baba',
        // marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    image: {
        width: '100%',
        resizeMode: 'contain',
        height: 400,
    },
});
