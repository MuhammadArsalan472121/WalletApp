import React,{useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import RBSheet from 'react-native-raw-bottom-sheet';
import AwesomeAlert from 'react-native-awesome-alerts';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function SubscriptionDetail({navigation}) {
  const [showAlertV, setShowAlertV] = useState(false)
  const refRBSheetModify = useRef();

  const showAlert = () => {
    setShowAlertV(true)
  };
  const hideAlert = () => {
    setShowAlertV(false)
  };
  const pressHandlerModify = () => {
    refRBSheetModify.current.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <IconAD name="bars" size={50} color="#fff" style={{marginRight: 10}} />
        <Text style={{fontSize: 30, textAlign: 'center', color: '#fff'}}>
          Subscription{'\n'}Details
        </Text>
      </View>

      <View style={styles.bodyStyle}>
        <View style={styles.bodyHeadingStyle}>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Customer Name :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>Customer Name Here</Text>
            </View>
          </View>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Duration :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>1 Month</Text>
            </View>
          </View>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Code :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>010001</Text>
            </View>
          </View>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Phone No. :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>03045320909</Text>
            </View>
          </View>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Product Name :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>Product Name Here</Text>
            </View>
          </View>

          <View style={styles.boldHeadingStyle}>
            <View>
              <Text style={styles.boldHeadingText}>Starting Date :</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>01-01-2021</Text>
            </View>
          </View>
          
          
        </View>

        <View style={{flex:0.2,}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FD941E',
              justifyContent:'center',
              alignItems:'center',
              borderRadius: 10,
              width: '90%',
              height:30
            }}>
            <Text style={styles.footTextStyle}>Active</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity onPress={pressHandlerModify} style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={styles.footTextStyle}>Modify</Text>
        </TouchableOpacity>
 <RBSheet
          ref={refRBSheetModify}
          closeOnDragDown={true}
          height={470}
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
            <Text style={{color: '#FD941E', fontSize: 20}}>
              Modify Subscription
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Code'}
                placeholderTextColor={'#999'}
                keyboardType={'numeric'}
                style={{
                  height: 'auto',
                  width: '90%',
                  color: '#111',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Label'}
                placeholderTextColor={'#999'}
                style={{
                  width: '90%',
                  color: '#111',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Duration'}
                placeholderTextColor={'#999'}
                style={{
                  width: '90%',
                  color: '#111',
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 5,
              }}>
              <View style={{flex: 0.5, justifyContent: 'center', margin: 10}}>
                <Text style={{fontSize: 16, color: '#777'}}>
                  Select{'\n'}Status:
                </Text>
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
                    width: '80%',
                    fontSize: 16,
                    color: '#777',
                  }}
                  dropdownTextStyle={{fontSize: 16}}
                  defaultValue={'Not Confirmed'}
                  options={['Open', 'Close', 'Not Confirmed']}
                  isFullWidth
                  renderRightComponent={() => (
                    <IconFA5
                      name="sort-down"
                      size={24}
                      color="#6F6F6F"
                      style={{paddingBottom: 10, paddingLeft: 10}}
                    />
                  )}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
                borderWidth: 1,
              }}>
              <TextInput
                placeholder={'Duration'}
                placeholderTextColor={'#999'}
                style={{
                  width: '90%',
                  color: '#111',
                }}
              />
            </View>

            <TouchableOpacity
              onPress={() => refRBSheetModify.current.close()}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                height: 50,
                width: '45%',
                backgroundColor: '#0090FF',
              }}>
              <IconAD name="minuscircleo" size={25} color="#fff" />
              <Text style={[styles.footTextStyle, {paddingLeft: 10}]}>
                Modify
              </Text>
            </TouchableOpacity>
          </View>
        </RBSheet>

        <TouchableOpacity onPress={showAlert} style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="close" size={25} color="#fff" />
          <Text style={styles.footTextStyle}>Delete</Text>
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
           
          onCancelPressed={hideAlert}
          onConfirmPressed={hideAlert}
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

  bodyStyle: {flex: 0.7, margin: 10, flexDirection: 'row'},
  bodyHeadingStyle: {
    flex: 0.8,
  },
  boldHeadingStyle: {
    flex: 0.2,
    margin:5,
  },
  boldHeadingText:{
    fontSize: 20,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  textStyle:{
    fontSize: 16,
    paddingLeft:10,
    fontFamily: 'Arial',
    textAlign: 'left',
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
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '45%',
  },
  footTextStyle: {
    fontSize: 15,
    color: '#fff',
  },
});
