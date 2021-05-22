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

import CONNECTION_IMG from '../../assets/images/connection.gif';

import CircularComponent from './CircularComponent';

const THEME_COLOR = 'salmon';

export default function CallScreen() {
  const [buttonComplete, setButtonComplete] = React.useState('SOS');
  const [buttonColor, setButtonColor] = React.useState('black');
  const [complete, setComplete] = React.useState(false);

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
        {complete ? (
          <Image source={CONNECTION_IMG} style={{width: 250}}></Image>
        ) : (
          <Text
            style={{
              marginTop: 55,
              marginBottom: 20,
              padding: 0,
              backgroundColor: 'white',
              fontWeight: '800',
              fontSize: 20,
              letterSpacing: 2,
              color:'grey'
            }}>
            " Press SOS for 3 seconds "
          </Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: '35%',
        }}>
        <FillUpButton
          increment={0.02}
          buttonBackgroundColor={buttonColor}
          fillupColor={'salmon'}
          height={complete ? 100 : 140}
          width={complete ? 300 : 280}
          buttonText={buttonComplete}
          incrementSpeed={10}
          buttonTextStyle={
            buttonComplete == 'SOS'
              ? {fontSize: 34, color: 'white', fontWeight: 'bold'}
              : {fontSize: 20, color: 'white', fontWeight: 'bold'}
          }
          activeOpacity={0.8}
          onFilled={() => {
            setButtonComplete('FINDING NEARBY VEHICLE!');
            setButtonColor('salmon');
            setComplete(true);
          }}
        />
      </View>
    </View>
  );
}
