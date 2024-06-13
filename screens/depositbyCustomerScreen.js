import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function DepositbyCustomer({navigation}) {
  const pressHandlerCancel = () => {
    navigation.navigate('Welcome');
  };
  const pressHandlerPerform = () => {
    navigation.navigate('Successful');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.headStyle}>
          <IconIi
            name="add-circle-outline"
            size={50}
            color="#fff"
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>
            Deposit{'\n'}by Customer
          </Text>
        </View>

        <View style={styles.bodyStyle}>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              alignItems: 'center',
              margin: 5,
            }}>
            <View style={{flex: 0.5, justifyContent: 'center', margin: 10}}>
              <Text style={{fontSize: 20}}>Select{'\n'}Subscription:</Text>
            </View>
            <View
              style={{
                flex: 0.6,
                flexDirection: 'row',
                alignItems: 'center',
                margin: 10,
                padding: 5,
                borderWidth: 1,
                height: 50,
              }}>
              <ModalDropdown
                textStyle={{
                  fontSize: 16,
                  color: '#777',
                }}
                dropdownTextStyle={{fontSize: 16}}
                defaultValue={'Subscription 1'}
                options={[
                  'Subscription 1',
                  'Subscription 2',
                  'Subscription 3',
                  'Subscription 4',
                  'Subscription 5',
                ]}
                isFullWidth
                renderRightComponent={() => (
                  <IconFA5
                    name="sort-down"
                    size={24}
                    color="#6F6F6F"
                    style={{
                      paddingBottom: 10,
                      justifyContent: 'space-around',
                      paddingLeft: 10,
                    }}
                  />
                )}
              />
            </View>
          </View>
          <View style={{flex: 0.6, margin: 5}}>
            <TextInput
              keyboardType="numeric"
              maxLength={11}
              placeholder="Enter Phone No"
              placeholderTextColor="#707070"
              style={{borderWidth: 1, margin: 10, color: '#111'}}></TextInput>

            <TextInput
              keyboardType="numeric"
              placeholder="Enter Amount"
              placeholderTextColor="#707070"
              style={{borderWidth: 1, margin: 10, color: '#111'}}></TextInput>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footStyle}>
        <TouchableOpacity
          onPress={pressHandlerCancel}
          style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={styles.footTextStyle}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pressHandlerPerform}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Perform</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headStyle: {
    flex: 0.4,
    flexDirection: 'row',
    height: 150,
    backgroundColor: '#0090FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyStyle: {flex: 0.4, margin: 10},

  footStyle: {
    flex: 0.2,
    alignItems: 'flex-end',
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  tOView: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '45%',
  },
  footTextStyle: {
    fontSize: 15,
    color: '#fff',
    paddingLeft: 10,
  },
});
