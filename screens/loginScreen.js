import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Welcome from './welcomeScreen';
import {useAuthContext} from '../contextApi/AuthContext';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({navigation}) {
  const {loginData, onLogout} = useAuthContext();
  const [state, setState] = useState({
    number: '',
    pin: '',
    token: '',
  });
  // const pressHandlerSignIn = () => {
  //   navigation.navigate('Welcome');
  // };
  // const {loginData} = useAuthContext();
  const pressHandlerSignUp = () => {
    navigation.navigate('Register');
  };
  const pressHandlerForgot = () => {
    navigation.navigate('ForgotPin');
  };

  const onSubmit = async () => {
    onSubmit();
    console.log(state);
    const data = {
      number: state.number,
      pin: state.pin,
    };

    const response = await axios
      .post(`https://mtechubregistration.herokuapp.com/api/v1/login`, data)
      .catch(e => {
        if (e && e.response) {
          if (e.response.status === 404) {
            //ID ya phone Number Ghalat hone pr condition
            // setEmailError(true)
          }
          if (e.response.status === 403) {
            //pin ghalat hone pr condition
            // setEmailError(false)
            // setPinError(true)
          }
        }
      });
    if (response && response.data) {
      console.log(response.data);
      loginData({
        number: response.data.number,
        token: response.data.token,
      });
    }
  };
  const handleLogout = () => {
    onLogout();
  };
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const number = await AsyncStorage.getItem('number');
      if (value !== null) {
        useState({'token': value});
      }
      if (number !== null) {
        useState({number});
      }
    } catch (e) {
      //error reading value
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../assets/logo.png')}
            style={{height: 100, width: 100}}
          />
          <Text style={styles.title}>LOGIN</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <Formik
            initialValues={{
              number: '',
              pin: '',
            }}
            onSubmit={(data, {setSubmitting, resetForm}) => {
              setSubmitting(true);
              console.log('submit: ', data);
              //es say nichay axios dalana ha

              async function getUser() {
                try {
                  const response = await axios.post(
                    'https://mtechubregistration.herokuapp.com/api/v1/login',
                    data,
                  );
                  loginData(response.data);
                  // console.log(response.data);
                  // console.log(response.status);

                  navigation.navigate('Welcome');
                } catch (error) {
                  console.error(error);
                }
              }
              getUser();

              // es upper upper axios ko rakhna ha
              setSubmitting(false);
              resetForm();
            }}>
            {props => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginBottom: 20,
                    marginTop: 40,
                    paddingLeft: 10,
                    alignItems: 'center',
                    borderWidth: 1,
                  }}>
                  <Icon name="user" size={20} />
                  <TextInput
                    placeholder={'Id or Phone Number'}
                    keyboardType={'phone-pad'}
                    onChangeText={props.handleChange('number')}
                    value={props.values.number}
                    placeholderTextColor={'#7e7e7e'}
                    style={{
                      height: 50,
                      paddingRight: 10,
                      width: '90%',
                      paddingLeft: 10,
                      color: '#111',
                    }}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    paddingLeft: 10,
                    alignItems: 'center',
                    borderWidth: 1,
                  }}>
                  <Icon name="lock" size={20} />
                  <TextInput
                    placeholder={'Pincode'}
                    onChangeText={props.handleChange('pin')}
                    value={props.values.pin}
                    secureTextEntry
                    placeholderTextColor={'#7e7e7e'}
                    keyboardType={'numeric'}
                    maxLength={4}
                    style={{
                      paddingLeft: 10,
                      paddingRight: 10,
                      height: 50,
                      width: '90%',
                      color: '#111',
                    }}
                  />
                </View>

                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    paddingTop: 10,
                    paddingRight: 10,
                  }}
                  onPress={pressHandlerForgot}>
                  <Text> Forgot Pin?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={props.handleSubmit}
                  style={{
                    backgroundColor: '#FD941E',
                    height: 50,
                    width: '95%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 20,
                  }}>
                  <Text style={{fontSize: 20, color: '#ffffff'}}>SIGNIN</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{alignSelf: 'center', margin: 10}}
        onPress={pressHandlerSignUp}>
        <Text>Don't have an account ? Sign Up</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
});
