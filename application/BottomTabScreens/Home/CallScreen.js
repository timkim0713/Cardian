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
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import WATCH_IMG from '../../assets/images/watch.png';

import CircularComponent from './CircularComponent';
const THEME_COLOR = 'salmon';

export default function CallScreen() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

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
        <CircularComponent />
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
    </View>
  );
}
