import React, {useRef} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function ManageCustomers({navigation}) {
  const refRBSheetAdd = useRef();
  const refRBSheetModify = useRef();

  const pressHandlerAdd = () => {
    refRBSheetAdd.current.open();
  };
  const pressHandlerModify = () => {
    refRBSheetModify.current.open();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <Image
          style={{height: 40, width: 40, marginRight: 20}}
          source={require('../assets/lockHouse.png')}
        />
        <Text style={{fontSize: 30, color: '#fff'}}>Manage Customer</Text>
      </View>

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={styles.boldHeadingStyle}>
            <Text style={styles.boldHeadingText}>Name</Text>
            <Text style={styles.boldHeadingText}>Phone No</Text>
            <Text style={styles.boldHeadingText}>Subscription</Text>
          </View>
          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
            >Customer</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={11}
            >03045320909</Text>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={3}
            >03</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity
          onPress={pressHandlerAdd}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Add</Text>
        </TouchableOpacity>
       
        <RBSheet
          ref={refRBSheetAdd}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
             <View style={{margin: 20}}>
            <Text style={{color: '#FD941E', fontSize: 20}}>Add Customer</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Name'}
                placeholderTextColor={'#999'}
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
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
              keyboardType={'numeric'}
                placeholder={'Phone No'}
                placeholderTextColor={'#999'}
                style={{
                  height: 'auto',
                  width: '90%',
                  paddingLeft: 10,
                  color: '#111',
                }}
              />
            </View>
            <TouchableOpacity
          onPress={() => refRBSheetAdd.current.close()}
          style={[styles.tOView, {alignSelf:'center',backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Add</Text>
        </TouchableOpacity>
          </View>
        
          </RBSheet>
       
        <TouchableOpacity
          onPress={pressHandlerModify}
          style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={styles.footTextStyle}>Modify</Text>
        </TouchableOpacity>
       
        <RBSheet
          ref={refRBSheetModify}
          closeOnDragDown={true}
          height={300}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={{margin: 20}}>
            <Text style={{color: '#FD941E', fontSize: 20}}>Edit Customer</Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                margin: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Name'}
                placeholderTextColor={'#999'}
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
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Phone No'}
                placeholderTextColor={'#999'}
                style={{
                  height: 'auto',
                  width: '90%',
                  paddingLeft: 10,
                  color: '#111',
                }}
              />
            </View>
            <TouchableOpacity
          onPress={() => refRBSheetModify.current.close()}
          style={[styles.tOView, {alignSelf:'center',backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Add</Text>
        </TouchableOpacity>
          </View>
        
        </RBSheet>
     
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
  boldHeadingStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  boldHeadingText: {
    flex: 0.4,
    fontSize: 18,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBodyStyle: {flexDirection: 'row', borderBottomWidth: 1},
  bodyTextStyle: {
    flex: 0.4,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 16,
    color: '#999',
  },

  footStyle: {
    flex: 0.1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  tOView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '45%',
  },
  footTextStyle: {
    fontSize: 15,
    paddingLeft:20,
    color: '#fff',
  },
});
