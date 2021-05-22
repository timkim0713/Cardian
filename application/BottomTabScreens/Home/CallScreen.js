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
  Animated,
} from 'react-native';
import FillUpButton from 'react-native-fill-up-button';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import WATCH_IMG from '../../assets/images/watch.png';

import CircularComponent from './CircularComponent';

const THEME_COLOR = 'salmon';

export default function CallScreen() {
  const [buttonComplete, setButtonComplete] = React.useState('SOS');

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
        {/* <CircularComponent /> */}
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
        <FillUpButton
          increment={0.01}
          buttonBackgroundColor={'black'}
          fillupColor={'salmon'}
          height={150}
          width={300}
          buttonText={buttonComplete}
          incrementSpeed={10}
          buttonTextStyle={{fontSize: 20, color: 'white', fontWeight: 'bold'}}
          activeOpacity={0.7}
          onFilled={() => {
            setButtonComplete('REQUEST SENT TO NEARBY VEHICLES');
          }}
        />
        {/* <TouchableOpacity>
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
                fontWeight: 'bold',
              }}>
              SOS
            </Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
}
