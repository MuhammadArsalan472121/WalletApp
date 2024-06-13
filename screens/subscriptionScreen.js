import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import RBSheet from 'react-native-raw-bottom-sheet';
import AwesomeAlert from 'react-native-awesome-alerts';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function Subscription({navigation}) {
  const [showAlertV, setShowAlertV] = useState(false);
  const showAlert = () => {
    setShowAlertV(true);
  };
  const hideAlert = () => {
    setShowAlertV(false);
  };
  const refRBSheetAdd = useRef();
  const refRBSheetModify = useRef();

  const pressHandlerAdd = () => {
    refRBSheetAdd.current.open();
  };
  const pressHandlerModify = () => {
    refRBSheetModify.current.open();
  };
  const pressHandlerActive = () => {
    navigation.navigate('SubscriptionDetail');
  };
  const pressHandlerAction = () => {
    navigation.navigate('CloseSubscription');
  };


  return (
    <View style={styles.container}>
      <View style={styles.headStyle}>
        <IconAD name="bars" size={50} color="#fff" style={{marginRight: 10}} />
        <Text style={{fontSize: 30, color: '#fff'}}>Subscription</Text>
      </View>

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={styles.boldHeadingStyle}>
            <Text style={styles.boldHeadingText}>Code</Text>
            <Text style={styles.boldHeadingText}>Label</Text>
            <Text style={styles.boldHeadingText}>Duration</Text>
            <Text style={styles.boldHeadingText}>Status</Text>
            <Text style={styles.boldHeadingText}>Action</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive} style={[styles.tOView, styles.statusButtonStyle]}>
              <Text style={styles.footTextStyle}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive}
              style={[
                styles.tOView,
                styles.statusButtonStyle,
                {backgroundColor: '#0090FF'},
              ]}>
              <Text style={styles.footTextStyle}>Inactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive} style={[styles.tOView, styles.statusButtonStyle]}>
              <Text style={styles.footTextStyle}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive}
              style={[
                styles.tOView,
                styles.statusButtonStyle,
                {backgroundColor: '#0090FF'},
              ]}>
              <Text style={styles.footTextStyle}>Inactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive} style={[styles.tOView, styles.statusButtonStyle]}>
              <Text style={styles.footTextStyle}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive}
              style={[
                styles.tOView,
                styles.statusButtonStyle,
                {backgroundColor: '#0090FF'},
              ]}>
              <Text style={styles.footTextStyle}>Inactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive} style={[styles.tOView, styles.statusButtonStyle]}>
              <Text style={styles.footTextStyle}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive}
              style={[
                styles.tOView,
                styles.statusButtonStyle,
                {backgroundColor: '#0090FF'},
              ]}>
              <Text style={styles.footTextStyle}>Inactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive} style={[styles.tOView, styles.statusButtonStyle]}>
              <Text style={styles.footTextStyle}>Active</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                pressHandlerAction();
              }}
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <Text
              style={styles.bodyTextStyle}
              keyboardType="numeric"
              maxLength={6}>
              010001
            </Text>
            <Text style={styles.bodyTextStyle}>Customer</Text>
            <Text style={styles.bodyTextStyle}>1 month</Text>
            <TouchableOpacity onPress={pressHandlerActive}
              style={[
                styles.tOView,
                styles.statusButtonStyle,
                {backgroundColor: '#0090FF'},
              ]}>
              <Text style={styles.footTextStyle}>Inactive</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.2,
                marginTop: 10,
                marginBottom: 10,
                alignItems: 'center',
              }}>
              <IconAD name="eye" size={20} color={'#FD941E'} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity
          onPress={pressHandlerAdd}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={[styles.footTextStyle, {padding: 10}]}>Add</Text>
        </TouchableOpacity>

        <RBSheet
          ref={refRBSheetAdd}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={470}
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
              Add Subscription
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
              onPress={() => refRBSheetAdd.current.close()}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                height: 50,
                width: '45%',
                backgroundColor: '#FD941E',
              }}>
              <IconIi name="add-circle-outline" size={25} color="#fff" />
              <Text style={[styles.footTextStyle, {paddingLeft: 10}]}>Add</Text>
            </TouchableOpacity>
          </View>
        </RBSheet>

        <TouchableOpacity
          onPress={pressHandlerModify}
          style={[styles.tOView, {backgroundColor: '#0090FF'}]}>
          <IconAD name="minuscircleo" size={20} color="#fff" />
          <Text style={[styles.footTextStyle, {padding: 10}]}>Modify</Text>
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

        <TouchableOpacity
          onPress={() => {
            showAlert();
          }}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="close" size={25} color="#fff" />
          <Text style={[styles.footTextStyle, {padding: 10}]}>Delete</Text>
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

  bodyStyle: {flex: 0.7, margin: 10},
  boldHeadingStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  boldHeadingText: {
    flex: 0.2,
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
    padding: 5,
  },
  bodyTextStyle: {
    flex: 0.2,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 12,
    color: '#111',
  },
  statusButtonStyle: {
    flex: 0.2,
    backgroundColor: '#FD941E',
    alignSelf: 'center',
    height: 30,
    borderRadius: 30,
  },

  footStyle: {
    flex: 0.1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  tOView: {
    flex: 0.3,
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
