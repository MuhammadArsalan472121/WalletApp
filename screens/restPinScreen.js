import React from 'react';
import {Component} from 'react';
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
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class ResetPin extends Component {
  constructor(props) {
    super(props);};

    pressHandlerVerify=()=>{
      this.props.navigation.navigate('AccountCreated');
    };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
      <View
          style={{
            flex: 0.3,
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

        <Text style={{fontSize: 20,alignSelf:'center', margin:20, fontWeight: 'bold'}}>Reset Pin</Text>

        <View style={{ flex: 0.2,alignItems:'center', marginBottom:100,}}>

            <View style={{flexDirection: 'row', justifyContent:'center',margin:10, paddingLeft:10, alignItems:'center', borderWidth:1}}>
              <Icon name="lock" size={20} />
              <TextInput
                placeholder={'New Pin'}
                placeholderTextColor={'#7e7e7e'}
                keyboardType={'numeric'}
                maxLength={6}
                style={styles.textInputStyle}/>
               
            </View>
            <View style={{flexDirection: 'row', justifyContent:'center', margin:10, paddingLeft:10, alignItems:'center', borderWidth:1}}>
              <Icon name="lock" size={20} />
              <TextInput
                placeholder={'Confirm New Pin'}
                secureTextEntry
                placeholderTextColor={'#7e7e7e'}
                keyboardType={'numeric'}
                maxLength={6}
                style={styles.textInputStyle}/>
   
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
              width:'90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf:'center',
              margin: 10,
            }}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>CONTINUE</Text>
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
  textInputStyle:{
    height: 'auto',
    width: '90%',
    paddingLeft:10,
    color:'#111' 
  }
});
