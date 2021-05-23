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
  LogBox,
} from 'react-native';
import FillUpButton from 'react-native-fill-up-button';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LOGO_IMG from '../../assets/images/logo4.png';
import SOS_IMG from '../../assets/images/sosRound.png';
import CONNECTION_IMG from '../../assets/images/connection.gif';
import BREATHING_IMG from '../../assets/images/breathing.gif';
import ALERT_IMG from '../../assets/images/alert.png';
import CircularComponent from './CircularComponent';

const THEME_COLOR = 'salmon';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

export default function CallScreen() {
  const [buttonComplete, setButtonComplete] = React.useState('SOS');
  const [buttonColor, setButtonColor] = React.useState('rgb(59,56,56)');
  const [complete, setComplete] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setButtonComplete('SOS');
      setButtonColor('rgb(59,56,56)');
      setComplete(false);
    };
  }, []);

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
          <></>
        ) : (
          <Text
            style={{
              marginTop: 40,
              marginBottom: 20,
              padding: 0,
              backgroundColor: 'white',
              fontWeight: '800',
              fontSize: 24,
              letterSpacing: 1,
              color: 'salmon',
            }}>
            Press SOS for 3 seconds
          </Text>
        )}
      </View>



      {complete ? (
        <></>
      ) : (
        <View
          style={{
            padding: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              marginTop: 55,
              padding: 0,
              backgroundColor: 'white',
              fontWeight: '800',
              fontSize: 19,
              letterSpacing: 1,
              color: 'grey',
            }}>
            "Do You Meed Medical Assistance?"
          </Text>
          <Text
            style={{
              marginTop: 55,
              padding: 0,
              backgroundColor: 'white',
              fontWeight: '800',
              fontSize: 19,
              letterSpacing: 2,
              color: 'grey',
            }}>
            "Is Someone Stalking You?"
          </Text>

          <Text
            style={{
              marginTop: 55,
              padding: 0,
              backgroundColor: 'white',
              fontWeight: '800',
              fontSize: 19,
              letterSpacing: 2,
              color: 'grey',
            }}>
            "Do You Need a Cardian?"
          </Text>
        </View>
      )}

      {/* <View
        style={{
          marginTop: '10%',
        }}> */}
        {complete ? (
          <View style={{flexDirection:'column', marginTop: '-25%',}}>
          <Image
            source={BREATHING_IMG}
            style={{
              width: 450,
              height: 450,
              alignContent: 'center',
              marginTop:-100
            }}></Image>
            <Image
            source={LOGO_IMG}
            style={{
              position:'absolute',
              width: 250,
              height: 250,
              alignContent: 'center',
              alignSelf:'center',
            }}></Image>
            </View>
        
        ) : (
          <>
            {/* <Image source={SOS_IMG} style={{position: 'absolute'}}></Image> */}
            <View style={{ marginBottom: 0, marginTop: '20%', }}>
              <Image
                source={ALERT_IMG}
                style={{ marginBottom: -18, marginLeft: -15 }}></Image>

              <FillUpButton
                increment={0.015}
                buttonBackgroundColor={buttonColor}
                fillupColor={'salmon'}
                height={40}
                width={320}
                buttonText={buttonComplete}
                incrementSpeed={10}
                buttonTextStyle={
                  buttonComplete == 'SOS'
                    ? { fontSize: 34, color: 'white', fontWeight: 'bold' }
                    : { fontSize: 20, color: 'white', fontWeight: 'bold' }
                }
                activeOpacity={0.8}
                onFilled={() => {
                  setButtonComplete('');
                  setButtonColor('salmon');
                  setComplete(true);
                }}
              />
            </View>
          </>
        )}
        {complete ? (
          <Text style={{ width: 400, color: 'grey', marginTop: -30, textAlign:'center', fontWeight:'700', fontSize:20}}>
            FINDING NEARBY VERHICLES...
            {/* * Emergency request has been sent to nearby vehicles. Please wait
            until Cardians arrive. */}
          </Text>
        ) : (
          <></>
        )}
      {/* </View> */}
    </View>
  );
}
