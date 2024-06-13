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
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconF from 'react-native-vector-icons/Feather';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RadioButton from '../components/RadioButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const PROP = [
  {
    key: '1',
    text: 'Customer',
  },
  {
    key: '2',
    text: 'Collector',
  },
];

export default function Register({navigation}) {
  const [stateC, setStateC] = useState({
    visibility: false,
    DateDisplay: 'Birthday',
  });
  const [genderV, setGender] = useState('Male');
  const [code, setCode] = useState('+92');


  /*<---Calendar Function--->*/
  const handleConfirm = date => {
    setStateC({DateDisplay: date.toString()});
  };

  const onPressCancel = () => {
    setStateC({visibility: false});
  };
  const onPressButton = () => {
    setStateC({visibility: true});
  };

  const selectionFunc = value => {
    if (value === 0) {
      setGender('Male');
    }
    if (value === 1) {
      setGender('Female');
    }
    if (value === 2) {
      setGender('Other');
    }
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
      setCode('+1');
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

  const pressHandlerSignUp = () => {
   navigation.navigate('NationalIDCard');
  };
  const pressHandlerLogIn = () => {
    navigation.navigate('Login');
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Formik
        initialValues={{
          firstName: '',
          secondName: '',
          email: '',
          city: '',
          birthday: '',
          number: '',
          gender: '',
        }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);

          console.log(genderV);
          let mobNumber = code + data.number;
          const newData = {
            ...data,
            birthday: stateC.DateDisplay,
            gender: genderV,
            number: mobNumber,
            pin:'1234'
          };

          console.log('submit: ', stateC.DateDisplay);
          console.log('submit: ', newData);

          //es say nichay axios dalana ha
          async function getUser() {
            try {
              const response = await axios.post(
                'https://mtechubregistration.herokuapp.com/api/v1/register',
                newData,
              );
              console.log(response);
              console.log(response.status);

              navigation.navigate('NationalIDCard');
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
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text style={styles.title}>REGISTER</Text>
              <Image
                source={require('../assets/addProfile.png')}
                style={{height: 70, width: 70}}
              />
            </View>

            <View style={{margin: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <IconSLI name="user" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'First Name'}
                  onChangeText={props.handleChange('firstName')}
                  value={props.values.firstName}
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
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <IconSLI name="user" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'Last Name'}
                  onChangeText={props.handleChange('secondName')}
                  value={props.values.secondName}
                  placeholderTextColor={'#6F6F6F'}
                  style={{
                    height: 'auto',
                    width: '90%',
                    paddingLeft: 10,
                    color: '#111',
                  }}
                />
              </View>
              <TouchableOpacity
                onPress={onPressButton}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <IconSLI name="calendar" size={20} color="#6F6F6F" />
                <Text
                  style={{
                    height: 'auto',
                    width: '90%',
                    paddingLeft: 10,
                    color: '#6F6F6F',
                    padding: 15,
                  }}>
                  {stateC.DateDisplay}
                </Text>
                <DateTimePickerModal
                  isVisible={stateC.visibility}
                  onConfirm={handleConfirm}
                  onCancel={onPressCancel}
                  mode="date"
                />
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <IconFA5 name="city" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'City'}
                  onChangeText={props.handleChange('city')}
                  value={props.values.city}
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
                  flexDirection: 'row',
                  justifyContent: 'center',
                  margin: 10,
                  paddingLeft: 10,
                  alignItems: 'center',
                  borderWidth: 1,
                }}>
                <IconF name="mail" size={20} color="#6F6F6F" />
                <TextInput
                  placeholder={'Email'}
                  onChangeText={props.handleChange('email')}
                  value={props.values.email}
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
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                  paddingLeft: 10,
                  borderWidth: 1,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <ModalDropdown
                    textStyle={{
                      fontSize: 13.5,
                      paddingTop: 8,
                      paddingBottom: 8,
                    }}
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
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Text
                  style={{
                    height: 'auto',
                    width: 'auto',
                    color: '#6F6F6F',
                  }}>
                  Sex :
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 10,
                    padding: 5,
                    width: '80%',
                    borderWidth: 1,
                  }}>
                  <View style={{width: '100%', alignItems: 'center'}}>
                    <ModalDropdown
                      textStyle={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: '#6F6F6F',
                        paddingRight: 30,
                        paddingTop: 8,
                        paddingBottom: 8,
                      }}
                      dropdownStyle={styles.dropdown}
                      dropdownTextStyle={{fontSize: 16, color: '#6F6F6F'}}
                      defaultValue={'Gender'}
                      onSelect={value => selectionFunc(value)}
                      options={['Male', 'Female', 'Other']}
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
              </View>
            </View>

            <View style={{marginLeft: 20}}>
              <Text
                style={{fontWeight: 'bold', marginBottom: 10, fontSize: 20}}>
                I am a :
              </Text>
              <RadioButton PROP={PROP} />
            </View>

            <View
              style={{marginLeft: 20, marginRight: 20, alignItems: 'center'}}>
              <TouchableOpacity
                // onPress={props.handleSubmit}
                onPress={pressHandlerSignUp}
                style={{
                  backgroundColor: '#FD941E',
                  height: 50,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, color: '#ffffff'}}>SIGNUP</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={pressHandlerLogIn}

                style={{margin: 20}}>
                <Text>Already have an account ? Login</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  dropdown: {
    backgroundColor: '#D3D3D3',
    width: 100,
  },
});
