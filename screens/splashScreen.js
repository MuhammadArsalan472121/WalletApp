import React from 'react';
import {Component} from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imgBgStyle}
          source={require('../assets/logo.png')}></ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBgStyle: {
    height: 100,
    width: 100,
  },
});
