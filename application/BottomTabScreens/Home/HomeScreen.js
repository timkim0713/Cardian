import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import WATCH_IMG from '../../assets/images/watch.png';

const THEME_COLOR = 'salmon';

export default function HomeScreen({navigation}) {
  function goToCallScreen() {
    navigation.navigate('CallScreen');
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 5,
      }}>
      <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
        <ImageBackground source={WATCH_IMG} style={{width: 200, height: 300}}>
          <View
            style={{
              marginTop: 83,
              marginLeft: 44,
              padding: 10,
              backgroundColor: 'red',
              width: 120,
              height: 140,
              borderRadius: 20,
            }}>
            <Text style={{color: 'white', marginBottom: 8}}>
              Cardian Activated
            </Text>
            <Text style={{color: 'white'}}>BPM: 0</Text>
            <Text style={{color: 'white'}}>Blood Type:AB</Text>
            <Text style={{color: 'white'}}>Guardian Contact</Text>
            <Text style={{color: 'white'}}>010-2673-0623</Text>

            <Text style={{color: 'yellow', margin: 10}}>I am Pregnant</Text>
          </View>
        </ImageBackground>

        <View style={{marginTop: 60, marginLeft: 5}}>
          <Text style={{color: 'black', fontSize: 18, width: 160}}>
            " I am Pregnant and I want someone to take me to the hospital when I
            am in danger. "
          </Text>

          <Text
            style={{marginTop: 20, color: 'black', fontSize: 18, width: 150}}>
            " I will be very appreciate it if you save me. "
          </Text>

          <Text
            style={{marginTop: 20, color: 'black', fontSize: 18, width: 150}}>
            " I will surely pay you back with "
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          goToCallScreen();
        }}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: '15%',
        }}>
        <Text
          style={{
            borderRadius: 10,
            padding: 20,
            backgroundColor: THEME_COLOR,
            fontWeight: '800',
            fontSize: 16,
          }}>
          CALL NEARBY VEHICLES
        </Text>
      </TouchableOpacity>
    </View>
  );
}
