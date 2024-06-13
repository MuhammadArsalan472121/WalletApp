import React, {useEffect, useState, useContext, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const getLocalStorage = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return token;
    }
  } catch (e) {
    //error reading value
    console.log(e);
    return [];
  }
};
const getLocalStorageNumber = async () => {
  try {
    const number = await AsyncStorage.getItem('number');
    if (number !== null) {
      return number;
    } else {
      return [];
    }
  } catch (e) {
    //error reading value
    console.log(e);
    return [];
  }
};

const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [token, setToken] = useState(getLocalStorage());
  const [number, setNumber] = useState(getLocalStorageNumber());

const loginData = async data => {
  try {
    await AsyncStorage.multiSet([
      ['number', data.number],
      ['token', data.token],
    ]);
  } catch (err) {
    console.log(err);
  }
};

const updateData = data => {};

const onLogout = async () => {
  // localStorage.removeItem('userData')
  try {
    // useState({token: ''});
    // await AsyncStorage.removeItem('token');
    // await AsyncStorage.clear();
    console.log('object')

  } catch (err) {
    console.log(err);
  }
};
return (
    <AuthContext.Provider
      value={{token, number, loginData, onLogout, updateData}}>
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext);
};

