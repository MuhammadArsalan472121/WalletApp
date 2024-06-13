import React from 'react';
import {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from 'react-native';

export default class Verify extends Component {

  constructor(props) {
    super(props);};

    pressHandlerVerify=()=>{
      this.props.navigation.navigate('ResetPin');
    };
  render() {
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
          <Text style={styles.title}>DUMMY LOGO</Text>
        </View>

        <View style={{ alignItems: 'center', margin: 20}}>
    
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Verification</Text>
          

          <Text>Enter Code Below</Text>

          <View
            style={{
              flexDirection: 'row',
              padding: 5,
              marginTop: 30,
            }}>
            <TextInput
              placeholder={'0'}
              placeholderTextColor={'#BCBCBC'}
              keyboardType={'numeric'}
              maxLength={1}
              style={styles.textInputStyle}
            />

            <TextInput
              placeholder={'0'}
              placeholderTextColor={'#BCBCBC'}
              keyboardType={'numeric'}
              maxLength={1}
              style={styles.textInputStyle}
            />

            <TextInput
              placeholder={'0'}
              placeholderTextColor={'#BCBCBC'}
              keyboardType={'numeric'}
              maxLength={1}
              style={styles.textInputStyle}
            />

            <TextInput
              placeholder={'0'}
              placeholderTextColor={'#BCBCBC'}
              keyboardType={'numeric'}
              maxLength={1}
              style={styles.textInputStyle}
            />
          </View>
        </View>

        
        </ScrollView>
        <TouchableOpacity
        onPress={() => {
              this.pressHandlerVerify();
            }}
          style={{
            backgroundColor: '#FD941E',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf:'center',
            margin: 10,
            width:'90%'
          }}>
          <Text style={{fontSize: 20, color: '#ffffff'}}>VERIFY</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  textInputStyle: {
    textAlign: 'center',
    fontSize: 20,
    height: 'auto',
    width: '15%',
    borderWidth: 1,
    margin:20,
    color: '#111',
  },
});
