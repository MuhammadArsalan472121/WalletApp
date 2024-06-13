import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconIi from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';

export default function CloseSubscription({navigation}) {

  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);
  const [toggleCheckBox5, setToggleCheckBox5] = useState(false);
  const [toggleCheckBox6, setToggleCheckBox6] = useState(false);
  const [toggleCheckBox7, setToggleCheckBox7] = useState(false);
  const [toggleCheckBox8, setToggleCheckBox8] = useState(false);
  const [toggleCheckBox9, setToggleCheckBox9] = useState(false);
  const [toggleCheckBox10, setToggleCheckBox10] = useState(false);

  const [showAlertV, setShowAlertV] = useState(false);

  const showAlert=()=> {
    setShowAlertV(true);
  };

  const hideAlert=() =>{
    setShowAlertV(false);
  };
 
  const pressHandlerCancel = () => {
    navigation.navigate('Subscription');
  };

  const pressHandlerYes = () => {
    navigation.navigate('ActionSuccessful');
  };
  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <IconAD
          name="minuscircleo"
          size={50}
          color="#fff"
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>
          Close{'\n'}Subscription
        </Text>
      </View>

      <KeyboardAvoidingView style={styles.searchStyle}>
        <ScrollView>
          <Text>Search Customer</Text>
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
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={styles.boldHeadingStyle}>
            <Text style={styles.boldHeadingText}>Label</Text>
            <Text style={styles.boldHeadingText}>Duration</Text>
            <Text style={styles.boldHeadingText}>End Date</Text>
            <Text style={styles.boldHeadingText}>Action</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox1}
                onValueChange={newValue => setToggleCheckBox1(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox2}
                onValueChange={newValue => setToggleCheckBox2(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox3}
                onValueChange={newValue => setToggleCheckBox3(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox4}
                onValueChange={newValue => setToggleCheckBox4(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox5}
                onValueChange={newValue => setToggleCheckBox5(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox6}
                onValueChange={newValue => setToggleCheckBox6(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox7}
                onValueChange={newValue => setToggleCheckBox7(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox8}
                onValueChange={newValue => setToggleCheckBox8(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox9}
                onValueChange={newValue => setToggleCheckBox9(newValue)}
              />
            </View>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.3,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <CheckBox
                disabled={false}
                tintColors={{true: '#0090FF', false: 'black'}}
                value={toggleCheckBox10}
                onValueChange={newValue => setToggleCheckBox10(newValue)}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity onPress={pressHandlerCancel}style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={styles.footTextStyle}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={showAlert} style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Perform</Text>
        </TouchableOpacity>

        <AwesomeAlert
            show={showAlertV}
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
            hideAlert();
            pressHandlerYes();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
          />

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

  searchStyle: {
    flex: 0.15,
    margin: 10,
    height:20,
  },
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

  bodyStyle: {flex: 0.6, margin: 10,},
  boldHeadingStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldHeadingText: {
    flex: 0.3,
    fontSize: 16,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBodyStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  bodyTextStyle: {
    flex: 0.3,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    color: '#111',
  },

  footStyle: {
    flex: 0.1,
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
    paddingLeft:10,
    color: '#fff',
  },
});
