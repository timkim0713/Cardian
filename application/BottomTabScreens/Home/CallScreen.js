import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import WATCH_IMG from '../../assets/images/watch.png';

const THEME_COLOR = 'salmon';

export default function CallScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          padding: 40,
        }}>
        <Text
          style={{
            marginTop: 55,
            marginBottom: 20,
            padding: 0,
            backgroundColor: 'white',
            fontWeight: '800',
            fontSize: 22,
            letterSpacing: 2,
          }}>
          " Cardian is ready to look for nearby vehicles to help you out in case
          you are in any kind of danger. Do not worry, we will find you and help
          you! "
        </Text>

        {/* <Text
          style={{
            backgroundColor: 'white',
            fontWeight: '800',
            fontSize: 20,
            letterSpacing: 1,
          }}>
          Do not worry, we will find you and help you! "
        </Text> */}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: '35%',
        }}>
        <TouchableOpacity
          onPress={() => {
            alert('help me');
          }}>
          <View
            style={{
              borderRadius: 100,
              padding: 20,
              backgroundColor: 'white',
              borderColor: 'black',
              borderWidth: 5,
              fontWeight: '800',
              fontSize: 16,
              width: 200,
              height: 200,
            }}>
            <Text
              style={{
                marginTop: 55,
                textAlign: 'center',
                padding: 0,
                backgroundColor: 'white',
                fontWeight: '800',
                fontSize: 40,
                letterSpacing: 10,
              }}>
              SOS
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
