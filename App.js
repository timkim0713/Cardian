import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MATIcon from 'react-native-vector-icons/MaterialIcons';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { hideBottomTabRecoil } from './application/RecoilStates/recoilStates';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenStack from './application/BottomTabScreens/Home/HomeScreenStack';
import CardianScreenStack from './application/BottomTabScreens/Cardian/CardianScreenStack';
import MyPageScreenStack from './application/BottomTabScreens/MyPage/MyPageScreenStack';

import LOGO from './application/assets/images/logo2.png';

const ICON_COLOR = 'salmon';
const THEME_COLOR = '#242424';

const Tab = createBottomTabNavigator();

function Main() {
  const [hideBottomTab, setHideBottomTab] = useRecoilState(hideBottomTabRecoil);

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={
          hideBottomTab
            ? {
              activeTintColor: ICON_COLOR,
              inactiveTintColor: THEME_COLOR,
              labelPosition: 'below-icon',

              style: {
                opacity: 0, //---------------------------------HIDDEN
              },
              labelStyle: {
                fontSize: Platform.OS == 'android' ? 12 : 10,
              },
            }
            : {
              activeTintColor: ICON_COLOR,
              inactiveTintColor: THEME_COLOR,
              labelPosition: 'below-icon',

              style: {
                height: Platform.OS == 'android' ? 70 : 70,
                paddingBottom: Platform.OS == 'android' ? 15 : 20,
                paddingTop: Platform.OS == 'android' ? 8 : 6,
              },
              labelStyle: {
                fontSize: Platform.OS == 'android' ? 12 : 10,
              },
            }

          // style: {
          //   height: Platform.OS == 'android' ? 70 : 70,
          //   paddingBottom: Platform.OS == 'android' ? 15 : 20,
          //   paddingTop: Platform.OS == 'android' ? 8 : 6,
          //   // backgroundColor: THEME_COLOR,-------------------------------------DARK MODE
          // },
          // labelStyle: {
          //   fontSize: Platform.OS == 'android' ? 12 : 10,
          // },
        }>
        <Tab.Screen
          name="MyHero"
          component={CardianScreenStack}
          options={{
            tabBarLabel: 'My Heroes',
            tabBarIcon: ({ color, size }) => (
              <MATIcon name="supervisor-account" color={color} size={28} />
              
            ),
          }}
        />
        <Tab.Screen
          name="CARDIAN"
          component={HomeScreenStack}
          options={{
            tabBarLabel: 'CARDIAN',
            tabBarIcon: ({ color, size }) => (
              <Image source={LOGO} style={{ width: 30, height: 25 }}></Image>
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={MyPageScreenStack}
          options={{
            tabBarLabel: 'My Page',
            tabBarIcon: ({ color, size }) => (
              <AntIcon name="profile" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
