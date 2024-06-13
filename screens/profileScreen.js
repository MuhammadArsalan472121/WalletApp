import React, {useState} from 'react';
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

import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class Profile extends Component {

  constructor(props) {
    super(props);};

    pressHandlerUpdate=()=>{
      this.props.navigation.navigate('Welcome');
    };
  state = {visibility: false, DateDisplay: 'Enter Expiry Date'};
  handleConfirm = date => {
    this.setState({DateDisplay: date.toUTCString()});
  };
  onPressCancel = () => {
    this.setState({visibility: false});
  };
  onPressButton = () => {
    this.setState({visibility: true});
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ScrollView>
   
            <View style={styles.headStyle}>
              <IconFA
                name="user-circle"
                size={50}
                color="#fff"
                style={{margin: 10,}}
                size={40}
              />
              <Text style={{fontSize: 30, color: '#fff'}}>Profile</Text>
            </View>
            
            <View style={{flex: 0.7, margin: 10}}>

            <View style={{flex: 0.16,alignItems:'center'}}>
              <Image source={require('../assets/profileImage.png')} style={{height:100,width:100}}/>
            </View>
            
              <View style={styles.FieldStyle}>
                <IconSLI name="user" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'User Name'}
                  placeholderTextColor={'#6F6F6F'}
                  style={{
                    height: 'auto',
                    width: '90%',
                    paddingLeft: 10,
                    color: '#111',
                  }}
                />
              </View>

              <View style={styles.FieldStyle}>
                <IconAD name="mail" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'Email'}
                  placeholderTextColor={'#6F6F6F'}
                  style={{
                    height: 'auto',
                    width: '90%',
                    paddingLeft: 10,
                    color: '#111',
                  }}
                />
              </View>

              <View style={styles.FieldStyle}>
                <IconAD name="lock" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'Password'}
                  placeholderTextColor={'#6F6F6F'}
                  style={{
                    height: 'auto',
                    width: '90%',
                    paddingLeft: 10,
                    color: '#111',
                  }}
                />
              </View>

              <View
                style={{
                  flex: 0.16,
                  margin: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontWeight: 'bold'}}>ADD NATIONAL ID CARD</Text>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <IconAD name="upload" size={30} color="#6F6F6F" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={this.onPressButton}
                style={[styles.FieldStyle, {marginTop: 10}]}>
                <IconSLI name="calendar" size={20} color="#6F6F6F" />
                <Text style={styles.dateTextStyle}>
                  {this.state.DateDisplay}
                </Text>
                <DateTimePickerModal
                  isVisible={this.state.visibility}
                  onConfirm={this.handleConfirm}
                  onCancel={this.onPressCancel}
                  mode='date'
                />
              </TouchableOpacity>
           
            </View>

            <View style={{flex: 0.1, margin: 20, alignItems: 'center'}}>
              <TouchableOpacity onPress={() => {
              this.pressHandlerUpdate();
            }} style={styles.buttonStyle}>
                <Text style={{fontSize: 25, color: '#ffffff'}}>UPDATE</Text>
              </TouchableOpacity>
            </View>

        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  headStyle: {
    flexDirection: 'row',
    height:120,
    backgroundColor: '#0090FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  FieldStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
  },

  dateTextStyle: {
    height: 'auto',
    width: '90%',
    paddingLeft: 10,
    color: '#6F6F6F',
    padding: 10,
  },

  buttonStyle: {
    backgroundColor: '#FD941E',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
