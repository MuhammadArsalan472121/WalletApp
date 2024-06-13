import React, {useRef} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  TextInput,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import RBSheet from 'react-native-raw-bottom-sheet';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconIi from 'react-native-vector-icons/Ionicons';

export default function ManageFunds() {
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
        <IconFA
          name="dollar"
          size={30}
          color="#fff"
          style={{marginRight: 10}}
        />
        <Text style={{fontSize: 25, color: '#fff'}}>
          Manage Funds / Cashies
        </Text>
      </View>

      <View style={styles.bodyStyle}>
        <ScrollView>
          <View style={styles.boldHeadingStyle}>
            <Text style={styles.boldHeadingText}>Code</Text>
            <Text style={styles.boldHeadingText}>Description{'\n'}/ Label</Text>
            <Text style={styles.boldHeadingText}>Currency</Text>
            <Text style={styles.boldHeadingText}>Status</Text>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#FD941E',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Open</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#0090FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#FD941E',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Open</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#0090FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#FD941E',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Open</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#0090FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#FD941E',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Open</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#0090FF',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.textBodyStyle}>
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="010001"
              placeholderTextColor="#999"
              keyboardType="numeric"
              maxLength={6}
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Customer1"
              placeholderTextColor="#999"
            />
            <TextInput
              style={styles.bodyTextStyle}
              placeholder="Xof"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              style={[
                styles.tOView,
                {
                  height: 30,
                  backgroundColor: '#FD941E',
                  alignSelf: 'center',
                  borderRadius: 30,
                },
              ]}>
              <Text style={styles.footTextStyle}>Open</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footStyle}>
        <TouchableOpacity
          onPress={pressHandlerAdd}
          style={[styles.tOView, {backgroundColor: '#FD941E'}]}>
          <IconIi name="add-circle-outline" size={25} color="#fff" />
          <Text style={[styles.footTextStyle,{paddingLeft:10}]}>Add</Text>
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
            <Text style={{color: '#FD941E', fontSize: 20}}>Add Fund</Text>

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
                placeholder={'Add Description / Label'}
                placeholderTextColor={'#999'}
                style={{
                  height: 100,
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
                  Select{'\n'}Currency:
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
                  defaultValue={'Euro'}
                  options={['Euro', 'Pound', 'USD', 'PKR', 'Yen']}
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
          <Text style={[styles.footTextStyle,{paddingLeft:10}]}>Modify</Text>
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
            <Text style={{color: '#FD941E', fontSize: 20}}>Modify Fund</Text>

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
                placeholder={'Add Description / Label'}
                placeholderTextColor={'#999'}
                style={{
                  height: 100,
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
                  Select{'\n'}Currency:
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
                  defaultValue={'Euro'}
                  options={['Euro', 'Pound', 'USD', 'PKR', 'Yen']}
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
                Update
              </Text>
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
    flex: 0.3,
    fontSize: 16,
    color: '#0090FF',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textBodyStyle: {flexDirection: 'row', borderBottomWidth: 1},
  bodyTextStyle: {
    flex: 0.3,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: 'DMSans-Regular',
    fontSize: 14,
    color: '#111',
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
