import React, { Component } from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
 
export default class Example extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          refAdd={refAdd => {
            this.RBSheet = refAdd;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <YourOwnComponent />
        </RBSheet>
      
      
      </View>
    );
  }
}


<View>

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
       



</View>