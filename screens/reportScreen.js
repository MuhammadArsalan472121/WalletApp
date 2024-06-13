import React, {useState} from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class Report extends Component {
  state = {visibility: false, DateDisplay: '01-01-2021'};
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
      <View style={styles.container}>
        <View style={styles.headStyle}>
          <IconE
            name="bar-graph"
            size={50}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 30, color: '#fff'}}>Report</Text>
        </View>

        <View
          style={{
            flex: 0.2,
            alignItems: 'center',
            margin: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <View style={{flex: 0.4, justifyContent: 'center', marginLeft: 10}}>
              <Text style={{fontSize: 20}}>Select{'\n'}Start Date:</Text>
            </View>

            <TouchableOpacity
              onPress={this.onPressButton}
              style={{
                flex: 0.6,
                height: 60,
                justifyContent: 'center',
                marginRight: 10,
                padding: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  height: 'auto',
                  width: '90%',
                  paddingLeft: 10,
                  color: '#6F6F6F',
                  padding: 10,
                }}>
                {this.state.DateDisplay}
              </Text>
              <DateTimePickerModal
                isVisible={this.state.visibility}
                onConfirm={this.handleConfirm}
                onCancel={this.onPressCancel}
                mode="date"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <View style={{flex: 0.4, justifyContent: 'center', marginLeft: 10}}>
              <Text style={{fontSize: 20}}>Select{'\n'}End Date:</Text>
            </View>

            <TouchableOpacity
              onPress={this.onPressButton}
              style={{
                flex: 0.6,
                height: 60,
                justifyContent: 'center',
                marginRight: 10,
                padding: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <Text
                style={{
                  height: 'auto',
                  width: '90%',
                  paddingLeft: 10,
                  color: '#6F6F6F',
                  padding: 10,
                }}>
                {this.state.DateDisplay}
              </Text>
              <DateTimePickerModal
                isVisible={this.state.visibility}
                onConfirm={this.handleConfirm}
                onCancel={this.onPressCancel}
                mode="date"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 0.05, justifyContent: 'center', margin: 20}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: '#0090FF',
            }}>
            Remaining Customer Payments
          </Text>
        </View>
        <View style={styles.bodyStyle}>
          <ScrollView>
            <View style={styles.boldHeadingStyle}>
              <Text style={styles.boldHeadingText}>Amount</Text>
              <Text style={styles.boldHeadingText}>Time</Text>
              <Text style={styles.boldHeadingText}>Customer</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>

            <View style={styles.textBodyStyle}>
              <Text style={styles.bodyTextStyle}>$ 100</Text>
              <Text style={styles.bodyTextStyle}>00:12 PM {'\n'}24-8-2021</Text>
              <Text style={styles.bodyTextStyle}>Customer Name Here</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headStyle: {
    flex: 0.2,
    flexDirection: 'row',
    backgroundColor: '#0090FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyStyle: {flex: 0.55, marginLeft: 10, marginRight: 10},
  boldHeadingStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  boldHeadingText: {
    flex: 0.33,
    fontSize: 20,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBodyStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 5,
  },
  bodyTextStyle: {
    flex: 0.33,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#111',
  },
});
