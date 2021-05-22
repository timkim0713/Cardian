import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

import {createStackNavigator} from '@react-navigation/stack';

import CardianScreen from './CardianScreen';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

export default function CardianScreenStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Cardian',
        // headerTitle: (props) => (
        //     <BuckeyHeaderComponent title={THREAD} color='primary' />
        // ),
        headerStyle: {
          // backgroundColor: 'white',
          // alignItems: 'center',
        },
        headerTitleAlign: 'center',
        // headerTintColor: ICON_COLOR,

        // headerTintColor: ICON_COLOR,
      }}>
      <Stack.Screen name="CardianScreen" component={CardianScreen} />
    </Stack.Navigator>
  );
}
