import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

// import {hideBottomTabRecoil} from '../../RecoilStates/recoilStates';

import HomeScreen from './HomeScreen';
import CallScreen from './CallScreen';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';

export default function HomeScreenStack({navigation, route}) {
  const Stack = createStackNavigator();

  // const [hideBottomTab, setHideBottomTab] = useRecoilState(hideBottomTabRecoil);

  // React.useLayoutEffect(() => {
  //   const routeName = getFocusedRouteNameFromRoute(route);
  //   if (routeName === 'CallScreen') {
  //     setHideBottomTab(true);
  //     navigation.setOptions({
  //       tabBarVisible: false,
  //       tabBarOptions: {style: {opacity: 0, top: 50}},
  //     });
  //   } else {
  //     setHideBottomTab(false);
  //     navigation.setOptions({tabBarVisible: true});
  //   }
  // }, [navigation, route]);

  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Home',
        headerTintColor: 'black',
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
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="CallScreen" component={CallScreen} />
    </Stack.Navigator>
  );
}
