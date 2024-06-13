import React from 'react';
import {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ActionSuccessful extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 0.6,
            padding: 10,
            justifyContent: 'center',
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
            Action Successful!
          </Text>
          <Text style={{color:'#6B6B6B'}}>
            PDF is saved in memory
          </Text>
        </View>

        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FD941E',
              height: 60,
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <Text style={{fontSize: 20, color: '#ffffff'}}>Back to Home</Text>
          </TouchableOpacity>

        </View>
      </View>
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
});