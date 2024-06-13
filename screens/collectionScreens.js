import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';

export default function Collection() {
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
  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <IconMi
          name="collections-bookmark"
          size={50}
          color="#fff"
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>
          Collection
        </Text>
      </View>

      <View style={styles.subscriptionField}>
        <View style={{flex: 0.5, justifyContent: 'center', margin: 10}}>
          <Text style={{fontSize: 20}}>Select{'\n'}Subscription:</Text>
        </View>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            alignItems: 'center',
            margin: 10,
            padding: 10,
            borderWidth: 1,
            height: 60,
          }}>
          <ModalDropdown
            textStyle={{
              fontSize: 20,
            }}
            dropdownTextStyle={{fontSize: 20}}
            defaultValue={'Subscription 1'}
            options={[
              'Subscription 1',
              'Subscription 2',
              'Subscription 3',
              'Subscription 4',
              'Subscription 5',
            ]}
          />
          <IconFA5
            name="sort-down"
            size={24}
            color="#6F6F6F"
            style={{paddingBottom: 10}}
          />
        </View>
      </View>

      <Text
        style={styles.accountCreatedTextStyle}>
        Account Created : 0001010
      </Text>

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={styles.boldHeadingStyle}>
            <Text style={[styles.boldHeadingText, {flex: 0.2}]}>No</Text>
            <Text style={styles.boldHeadingText}>Amount</Text>
            <Text style={styles.boldHeadingText}>End Date</Text>
            <Text style={styles.boldHeadingText}>Action</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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
            <Text style={[styles.bodyTextStyle, , {flex: 0.2}]}>1</Text>
            <Text style={styles.bodyTextStyle}>1000</Text>
            <Text style={styles.bodyTextStyle}>01-02-2021</Text>
            <View
              style={{
                flex: 0.25,
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

  subscriptionField: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },

  accountCreatedTextStyle:{
    flex:0.05,
    fontSize: 22,
    color: '#0090FF',
    textAlign: 'center',
    margin: 10,
    padding: 10,
  },

  bodyStyle: {flex: 0.6,  margin: 10},
  boldHeadingStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldHeadingText: {
    flex: 0.26,
    fontSize: 16,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBodyStyle: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  bodyTextStyle: {
    flex: 0.26,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 15,
    color: '#111',
  },
});
