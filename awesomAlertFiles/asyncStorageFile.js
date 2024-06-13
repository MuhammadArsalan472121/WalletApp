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
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    // Update the document title using the browser API
    this.getData();
  });

  const onSubmit = async () => {
    try {
      useState({ token: 'abc123' });
      // await AsyncStorage.setItem(username, this.state.username);
      // await AsyncStorage.setItem('token', 'abc123');
      await AsyncStorage.multiSet([
        ['username', state.username],
        ['token', 'abc123'],
      ]);
      console.log(state.username);
      console.log(state.token);
    } catch (err) {
      console.log(err);
    }
  };
  const onLogout = async () => {
    try {
      useState({token: ''});
      // await AsyncStorage.removeItem('token');
      await AsyncStorage.clear();
      console.log(state.username);
      console.log(state.token);
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const username = await AsyncStorage.getItem('username');
      if (value !== null) {
        useState({token: value});
      }
      if (username !== null) {
        useState({username});
      }
    } catch (e) {
      //error reading value
    }
  };

  return (
    <View
      style={{flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
      <Text>{state.token}</Text>
      <View style={{alignItems: 'center'}}>
        <Text>{'Username'}</Text>
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
            placeholder={'Username'}
            value={state.username}
            onChangeText={val => useState({username: val})}
            placeholderTextColor={'#7e7e7e'}
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
      <View style={{alignItems: 'center'}}>
        <Text>{'Password'}</Text>
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
            placeholder={'Password'}
            value={state.password}
            onChangeText={val => useState({password: val})}
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
          }}>
          <Text style={{color: '#FFF'}}>Submit Button</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          onPress={onLogout}
          style={{
            elevation: 5,
            borderWidth: 0,
            height: 50,
            justifyContent: 'center',
            width: 150,
            alignItems: 'center',
            borderRadius: 50,
            backgroundColor: 'yellow',
          }}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
