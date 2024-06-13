import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconIi from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function DepositbyCollector({navigation}) {
  const pressHandlerCancel = () => {
    navigation.navigate('Welcome');
  };
  const pressHandlerPerform = () => {
    navigation.navigate('Successful');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <IconIi
          name="add-circle-outline"
          size={50}
          color="#fff"
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>
          Deposit{'\n'}by Collector
        </Text>
      </View>

      <View style={styles.bodyStyle}>
        <KeyboardAwareScrollView style={{borderWidth: 1, margin: 5}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Text style={{marginLeft: 10}}>All Contacts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Text>Or Scan</Text>
              <IconIi
                name="qr-code"
                size={25}
                color={'#707070'}
                style={{marginRight: 10, marginLeft: 5}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.fields}>
            <TouchableOpacity>
              <IconIi name="search" size={20} color={'#707070'} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInputStyle}
              placeholder={'Search Name or Number!'}
              placeholderTextColor={'#707070'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
              borderBottomWidth: 1,
            }}>
            <View style={{marginRight: 20}}>
              <Image
                source={require('../assets/profilePic.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View>
              <View>
                <Text style={{fontFamily: 'DMSans-Bold'}}>Hailey Sanders</Text>
              </View>
              <View>
                <Text style={{color: '#707070', textAlign: 'center'}}>
                  +090078601
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
              borderBottomWidth: 1,
            }}>
            <View style={{marginRight: 20}}>
              <Image
                source={require('../assets/profilePic.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View>
              <View>
                <Text style={{fontFamily: 'DMSans-Bold'}}>Hailey Sanders</Text>
              </View>
              <View>
                <Text style={{color: '#707070', textAlign: 'center'}}>
                  +090078601
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
              borderBottomWidth: 1,
            }}>
            <View style={{marginRight: 20}}>
              <Image
                source={require('../assets/profilePic.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View>
              <View>
                <Text style={{fontFamily: 'DMSans-Bold'}}>Hailey Sanders</Text>
              </View>
              <View>
                <Text style={{color: '#707070', textAlign: 'center'}}>
                  +090078601
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              margin: 10,
              borderBottomWidth: 1,
            }}>
            <View style={{marginRight: 20}}>
              <Image
                source={require('../assets/profilePic.png')}
                style={{height: 60, width: 60}}
              />
            </View>
            <View>
              <View>
                <Text style={{fontFamily: 'DMSans-Bold'}}>Hailey Sanders</Text>
              </View>
              <View>
                <Text style={{color: '#707070', textAlign: 'center'}}>
                  +090078601
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            margin: 5,
          }}>
          <View style={{flex: 0.5, justifyContent: 'center', margin: 10}}>
            <Text style={{fontSize: 20}}>Select{'\n'}Subscription:</Text>
          </View>
          <View
            style={{
              flex: 0.5,
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
              dropdownStyle={styles.dropdown}
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
        <Text style={{fontSize: 20, marginLeft: 10}}>Amount :</Text>

        <TextInput
          keyboardType="numeric"
          placeholder="100"
          placeholderTextColor="#707070"
          style={{borderWidth: 1, margin: 10, color: '#111'}}></TextInput>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity
          onPress={pressHandlerCancel}
          style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={[styles.footTextStyle, {paddingLeft: 10}]}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pressHandlerPerform}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={[styles.footTextStyle, {paddingLeft: 10}]}>Perform</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
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

  bodyStyle: {flex: 0.7, margin: 10},

  fields: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    height: 50,
    borderWidth: 1,
  },
  textInputStyle: {
    color: '#3A3A3A',
    height: 50,
    width: '80%',
  },

  footStyle: {
    flex: 0.05,
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
  },
});
