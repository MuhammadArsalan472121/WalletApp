import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlertV: false };
  };

  showAlert = () => {
    this.setState({
      showAlertV: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlertV: false
    });
  };

  render() {
    const {showAlertV} = this.state;

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>

        <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Confirm Delete"
            message="!"
            messageStyle={{
              backgroundColor: '#0090FF',
              fontSize: 30,
              textAlign: 'center',
              textAlignVertical: 'center',
              color: '#fff',
              borderRadius: 50,
              width: 100,
              height: 100,
            }}
            IconIi={{name: 'alert-circle', size: 25}}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={true}
            showConfirmButton={true}
            cancelText="Yes"
            cancelButtonTextStyle={{fontSize: 16}}
            cancelButtonColor="#FD941E"
            cancelButtonStyle={{
              height: 50,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            confirmText="No"
            confirmButtonTextStyle={{fontSize: 16}}
            confirmButtonColor="#0090FF"
            confirmButtonStyle={{
              height: 50,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onCancelPressed={() => {
              this.hideAlert();
            }}
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});