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
      <TouchableOpacity
        onPress={() => {
          alert('help me');
        }}
        style={{flex: 1, justifyContent: 'flex-end', marginBottom: '15%'}}>
        <Text
          style={{
            borderRadius: 10,
            padding: 20,
            backgroundColor: THEME_COLOR,
            fontWeight: '800',
            fontSize: 16,
          }}>
          CALL NEARBY asdfasdfasdfVEHICLES!
        </Text>
      </TouchableOpacity>
    </View>
  );
}
