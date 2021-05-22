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
import BREATHING_IMG from '../../assets/images/breathing.gif';

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
        backgroundColor: complete ? 'rgb(241,242,243)' : 'white',
      }}>
      <View
        style={{
          padding: 40,
        }}>
        {complete ? (
          <></>
        ) : (
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
            " Cardian is ready to look for nearby vehicles to help you out in
            case you are in any kind of danger. Do not worry, we will find you
            and help you! "
          </Text>
        )}
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: '50%',
        }}>
        {complete ? (
          <Image
            source={BREATHING_IMG}
            style={{
              position: 'absolute',
              width: 400,
              height: 400,
              marginBottom: 0,
              alignContent: 'center',
            }}></Image>
        ) : (
          <></>
        )}

        {complete ? (
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              padding: 125,
              borderRadius: 300,
              backgroundColor: 'salmon',
            }}></View>
        ) : (
          <FillUpButton
            increment={0.02}
            buttonBackgroundColor={buttonColor}
            fillupColor={'salmon'}
            height={140}
            width={280}
            buttonText={buttonComplete}
            incrementSpeed={10}
            buttonTextStyle={
              buttonComplete == 'SOS'
                ? {fontSize: 34, color: 'white', fontWeight: 'bold'}
                : {fontSize: 20, color: 'white', fontWeight: 'bold'}
            }
            activeOpacity={0.8}
            onFilled={() => {
              setButtonComplete('');
              setButtonColor('salmon');
              setComplete(true);
            }}
          />
        )}
        {complete ? (
          <Text style={{width: 250, color: 'grey', marginTop: 15}}>
            * Emergency request has been sent to nearby vehicles. Please wait
            until Cardians arrive.
          </Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
