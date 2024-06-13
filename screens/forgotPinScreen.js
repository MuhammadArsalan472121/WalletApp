import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Formik} from 'formik';
import axios from 'axios';
import ModalDropdown from 'react-native-modal-dropdown';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default function ForgotPin({navigation}) {
  const [code, setCode] = useState('+92');
  const pressHandlerSend = () => {
    navigation.navigate('Verify');
  };

  const countryCode = value => {
    if (value === 0) {
      setCode('+91');
    }
    if (value === 1) {
      setCode('+92');
    }
    if (value === 2) {
      setCode('+93');
    }
    if (value === 3) {
      setCode('+43');
    }
    if (value === 4) {
      setCode('+32');
    }
    if (value === 5) {
      setCode('+49');
    }
    if (value === 6) {
      setCode('+93');
    }
    if (value === 7) {
      setCode('+53');
    }
    if (value === 8) {
      setCode('+81');
    }
    if (value === 9) {
      setCode('+966');
    }
  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          number: '',
        }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);

          let mobNumber = code + data.number;
          const newData = {
            ...data,
            number: mobNumber,
          };

          console.log('submit: ', newData);

          //es say nichay axios dalana ha
          async function getUser() {
            try {
              const response = await axios.post(
                'https://mtechubregistration.herokuapp.com/api/v1/profile',
                newData,
              );
              console.log(response);
              console.log(response.status);

              navigation.navigate('Verify');
            } catch (error) {
              console.error(error);
            }
          }
          getUser();
          // es upper upper axios ko rakhna ha
          setSubmitting(false);
          resetForm();
        }}>
        {props => (
          <>
            <View
              style={{
                flex: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/logo.png')}
                style={{height: 100, width: 100}}
              />
            </View>

            <View
              style={{
                flex: 0.3,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                Forgot Pin?
              </Text>

              <Text style={{}}>Enter Phone No. for Verification Code</Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: 30,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingLeft: 10,
                  }}>
                  <ModalDropdown
                    textStyle={{
                      fontSize: 13.5,
                    }}
                    isFullWidth
                    renderRightComponent={() => (
                      <IconFA5
                        name="sort-down"
                        size={24}
                        color="#6F6F6F"
                        style={{paddingBottom: 10, paddingLeft: 10}}
                      />
                    )}
                    dropdownStyle={styles.dropdown}
                    dropdownTextStyle={{fontSize: 12}}
                    defaultValue={'+92'}
                    onSelect={value => countryCode(value)}
                    options={[
                      '+91',
                      '+92',
                      '+93',
                      '+43',
                      '+32',
                      '+1',
                      '+49',
                      '+53',
                      '+81',
                      '+966',
                    ]}
                  />
                </View>
                <KeyboardAwareScrollView>
                  <TextInput
                    placeholder={'Phone No.'}
                    onChangeText={props.handleChange('number')}
                    value={props.values.number}
                    placeholderTextColor={'#6F6F6F'}
                    keyboardType={'numeric'}
                    maxLength={10}
                    style={{
                      paddingLeft: 10,
                      height: 'auto',
                      width: '90%',
                      color: '#111',
                    }}
                  />
                </KeyboardAwareScrollView>
              </View>
            </View>
            <View style={{flex: 0.4, justifyContent: 'flex-end'}}>
              <TouchableOpacity
                onPress={pressHandlerSend}
                style={{
                  backgroundColor: '#FD941E',
                  height: 60,
                  marginBottom: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  width: '85%',
                }}>
                <View>
                  <Text style={{fontSize: 20, color: '#ffffff'}}>
                    SEND CODE
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
  },
  dropdown: {
    width: 50,
  },
});
