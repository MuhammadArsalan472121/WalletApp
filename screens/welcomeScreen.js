import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Fontisto';
import IconIi from 'react-native-vector-icons/Ionicons';
import IconMi from 'react-native-vector-icons/MaterialIcons';
import {useAuthContext} from '../contextApi/AuthContext';
import Login from './loginScreen';

export default function Welcome({navigation}) {
  const {onLogout} = useAuthContext()

  const pressHandlerManageFunds = () => {
    navigation.navigate('ManageFunds');
  };

  const pressHandlerManageCustomer = () => {
    navigation.navigate('ManageCustomers');
  };

  const pressHandlerManageSubscription = () => {
    navigation.navigate('Subscription');
  };

  const pressHandlerCollections = () => {
    navigation.navigate('Collection');
  };

  const pressHandlerReport = () => {
    navigation.navigate('Report');
  };

  const pressHandlerSetting = () => {
    navigation.navigate('Profile');
  };

  const pressHandlerCollector = () => {
    navigation.navigate('DepositByCollector');
  };

  const pressHandlerCustomer = () => {
    navigation.navigate('DepositByCustomer');
  };
  const NameFunction = props => {
    return <Text style={styles.mainFontStyle}>Welcome, {props.name}</Text>;
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstMainView}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <NameFunction name="Subtain" />
          <IconAD name="logout" size={25} color={'#FFF'} onPress={onLogout} />
        </View>

        <View>
          <Text style={[styles.mainFontStyle, {fontSize: 30}]}>$ 742,000</Text>

          <Text
            style={[
              styles.mainFontStyle,
              {fontSize: 12, padding: 0, paddingBottom: 10},
            ]}>
            Available balance
          </Text>
        </View>

        <View style={styles.subView}>
          <View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 12}}>Sent</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconE name="dot-single" size={20} color="#FF5141" />
              <Text style={[styles.secondaryFontStyle, {fontSize: 22}]}>
                $ 100,460
              </Text>
            </View>
          </View>

          <View>
            <View style={{paddingLeft: 20}}>
              <Text style={{fontSize: 12}}>Received</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconE name="dot-single" size={20} color="#0090FF" />
              <Text style={[styles.secondaryFontStyle, {fontSize: 22}]}>
                $ 10,773,000
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secondMainView}>
        <View>
          <Text style={{fontSize: 26, paddingBottom: 10}}>Menu</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            onPress={pressHandlerManageFunds}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconF name="dollar" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Manage {'\n'}funds</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandlerManageCustomer}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconIi name="person" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Manage Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandlerManageSubscription}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconAD name="bars" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Manage Subscription</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={pressHandlerCollections}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconMi name="collections-bookmark" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandlerReport}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconE name="bar-graph" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Generate Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={pressHandlerSetting}
            style={styles.iconViewStyle}>
            <View style={styles.iconStyle}>
              <IconAD name="setting" size={20} color="#fff" />
            </View>
            <Text style={styles.fontStyle}>Setting</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={pressHandlerCollector}
          style={{
            flexDirection: 'row',
            backgroundColor: '#0090FF',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: '45%',
          }}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={{color: '#fff', paddingLeft: 20, fontWeight: 'bold'}}>
            Deposited{'\n'}by Collector{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={pressHandlerCustomer}
          style={{
            flexDirection: 'row',
            backgroundColor: '#FD941E',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: '45%',
          }}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={{color: '#fff', paddingLeft: 20, fontWeight: 'bold'}}>
            Deposited{'\n'}by Customer{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-around',
  },
  firstMainView: {
    flex: 0.4,
    backgroundColor: '#0090FF',
    padding: 30,
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 100,
    backgroundColor: '#fff',
  },

  mainFontStyle: {color: '#fff', padding: 10, fontSize: 25},

  secondMainView: {
    flex: 0.6,
    margin: 30,
  },
  iconViewStyle: {
    borderWidth: 1,
    borderColor: '#0090FF',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    width: 90,
    height: 100,
  },
  iconStyle: {
    backgroundColor: '#0090FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 40,
    height: 40,
  },
  fontStyle: {
    fontSize: 12,
    textAlign: 'center',
  },
});
