/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
// import Icons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../images/login.png';


class DisplayLogin extends Component {

  constructor() {
    super();
    this.state = {
      phoneNumber: '',
      password: '',
    };
  }

  UNSAFE_componentWillMount() {

    console.log('start');
  }
  componentDidMount() {
    console.log('end');

  }

  onLogin = () => {

    const { phoneNumber, password } = this.state;
    console.log('onLogin', phoneNumber, password);
  }


  render() {
    console.log('render', this.state);
    console.log('render props', this.props);


    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.loginTitle}>
            <Text style={styles.text}>Hương Vị Quê Nhà</Text>
          </View>
          <View style={styles.viewImage}>
            <Image style={styles.image} source={logo} />
          </View>
          <View style={styles.viewPhone}>
            <Icon
              name="phone"
              color="#489bff"
              size={30}
            />
            <TextInput style={styles.inputPhone} keyboardType={'numbers-and-punctuation'} placeholder="Phone number" value={this.state.phoneNumber} onChangeText={text => {
              this.setState({ phoneNumber: text });

            }} />
          </View>
          <View style={styles.viewPhone}>
            <Icon
              name="lock"
              color="#489bff"
              size={30}
            />
            <TextInput style={styles.inputPhone} secureTextEntry={true} placeholder="Password" value={this.state.text} onChangeText={text => {
              this.setState({ password: text });
            }} />
          </View>
          <TouchableWithoutFeedback onPress={this.onLogin}>
            <View style={styles.btnLogin}>
              <Text>Đăng Nhập</Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>

      </SafeAreaView>
    );
  }
}

// const DisplayLogin = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={styles.loginTitle}>
//           <Text style={styles.text}>Hương Vị Quê Nhà</Text>
//         </View>
//         <View style={styles.viewImage}>
//           <Image style={styles.image} source={logo} />
//         </View>
//         <View style={styles.viewPhone}>
//           <Icon
//             name="phone"
//             color="#489bff"
//             size={30}
//           />
//           <TextInput style={styles.inputPhone} keyboardType={'numbers-and-punctuation'} placeholder="Phone number" />
//         </View>
//         <View style={styles.viewPhone}>
//           <Icon
//             name="lock"
//             color="#489bff"
//             size={30}
//           />
//           <TextInput style={styles.inputPhone} secureTextEntry={true} placeholder="Password" />
//         </View>
//         <TouchableWithoutFeedback>
//           <View style={styles.btnLogin}>
//             <Text>Đăng Nhập</Text>
//           </View>
//         </TouchableWithoutFeedback>
//       </ScrollView>

//     </SafeAreaView>
//   );
// };

export default DisplayLogin;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loginTitle: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: '#222b45',
    fontSize: 35,
    marginHorizontal: 20,
  },

  viewImage: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: '30%',
    resizeMode: 'contain',
    height: 50,
  },
  textPhone: {
    marginTop: 20,
    fontSize: 20,
    color: '#222b45',
    alignSelf: 'center',
  },
  viewPhone: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 30,
    alignItems: 'flex-end',
  },
  inputPhone: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#222b45',
  },
  btnLogin: {
    marginHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    alignItems: 'center',
  },
});
