import React, {useEffect, useState, useContext, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
const getLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return token;
    } else {
      return [];
    }
  } catch (e) {
    //error reading value
    console.log(e);
    return [];
  }
};
const getLocalStorageUsername = async () => {
  try {
    const username = await AsyncStorage.getItem('username');
    if (username !== null) {
      return username;
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
    return [];
  }
};
const AuthContext = React.createContext();
export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(getLocalStorage());
  const [username, setUsername] = useState(getLocalStorageUsername());
  
  const loginData = async data => {
    try {
      await AsyncStorage.multiSet([
        ['username', data.username],
        ['token', data.token],
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  const updateData = data => {};
  const onLogout = async () => {
    try {
      useState({token: ''});
      await AsyncStorage.clear();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider
      value={{token, username, loginData, onLogout, updateData}}>
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};



import React, { useState } from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native'
import { Formik } from 'formik'
import axios from 'axios'
import { useAuthContext } from 'AuthContext' ///Yaha kr auth context ko import wojus file ma pra ga
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import AsyncStorage from '@react-native-community/async-storage'
export default function Login() {
  const { loginData, onLogout } = useAuthContext()
  const [state, setState] = useState({
    username: '',
    password: '',
    token: '',
  })
  const onSubmit = () => {
    console.log(state)
    const data = {
      number: state.number,
      pin: state.pin,
    }
    const response = await axios.post(`yaha api daleeee`, data).catch((e) => {
      if (e && e.response) {
        if (e.response.status === 404) {
          //email ghalat hona ka liya condition
          // setEmailerror(true)
        }
        if (e.response.status === 403) {
          //Password ghalat hona ka liya conditon
          // setEmailerror(false)
          // setpassworderror(true)
        }
      }
    })
    if (response && response.data) {
      console.log(response.data)
      loginData({
        username: response.data.username,
        token: response.data.token,
      })
    }
  }
  const handleLogout = () => {
    onLogout()
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token')
      const username = await AsyncStorage.getItem('username')
      if (value !== null) {
        useState({ token: value })
      }
      if (username !== null) {
        useState({ username })
      }
    } catch (e) {
      //error reading value
    }
  }
  return (
    <View
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}
    >
      <Text>{state.token}</Text>
      <View style={{ alignItems: 'center' }}>
        <Text>{'Username'}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 10,
            alignItems: 'center',
            borderWidth: 1,
          }}
        >
          <Icon name='lock' size={20} />
          <TextInput
            placeholder={'Username'}
            value={state.username}
            onChangeText={(val) => setState({ username: val })}
            placeholderTextColor={'#7E7E7E'}
            style={{
              paddingLeft: 10,
              paddingRight: 10,
              height: 50,
              width: '90%',
              color: '#111',
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{'Password'}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 10,
            alignItems: 'center',
            borderWidth: 1,
          }}
        >
          <Icon name='lock' size={20} />
          <TextInput
            placeholder={'Password'}
            value={state.password}
            onChangeText={(val) => setState({ password: val })}
            secureTextEntry
            placeholderTextColor={'#7E7E7E'}
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
      </View>
      <View>
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            elevation: 5,
            borderWidth: 0,
            height: 50,
            justifyContent: 'center',
            width: 150,
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: 'skyblue',
          }}
        >
          <Text style={{ color: '#FFF' }}>Submit Button</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            elevation: 5,
            borderWidth: 0,
            height: 50,
            justifyContent: 'center',
            width: 150,
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: 'yellow',
          }}
        >
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}