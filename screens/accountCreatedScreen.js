import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default function AccountCreated({navigation}) {
  const pressHandlerContinue = () => {
    navigation.navigate('Welcome');
  };
  return (
    <View style={styles.container}>
    <View
      style={{
        flex: 0.4,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/thumbsUp.png')}
        style={{height: 200, width: 200}}
      />
    </View>

    <View
      style={{
        flex: 0.3,
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 25,
          margin: 10,
        }}>
        Account Created!
      </Text>
      <Text style={{color:'#6B6B6B'}}>
        Dear user your account has been created{'\n'} successfully. Continue
        to start using app
      </Text>
    </View>

    <View
      style={{
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity
      onPress={pressHandlerContinue}
        style={{
          backgroundColor: '#FD941E',
          height: 50,
          width: '90%',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, color: '#ffffff'}}>CONTINUE</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <Text>by clicking start, you agree to our </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#0090FF',
                borderBottomWidth: 1,
                borderBottomColor: '#0090FF',
              }}>
              Privacy Policy.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text>our </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: '#0090FF',
                borderBottomWidth: 1,
                borderBottomColor: '#0090FF',
              }}>
              Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>

  )
}



    

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});
