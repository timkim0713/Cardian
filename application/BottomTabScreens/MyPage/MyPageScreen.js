import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'
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
import MedalIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';
import WATCH_IMG from '../../assets/images/watch.png';


const list = [
  {
    title: 'Personal Information',
    icon: 'info-outline',
    type: ''
  },
  {
    title: 'Cardian List',
    icon: 'playlist-add-check',
    type: ''
  },
  {
    title: 'Smart Watch Connetion',
    icon: 'watch',
    type: 'MaterialIcons'
  },
  {
    title: 'SOS History',
    icon: 'history',
    type: ''
  },
  {
    title: 'Citizen Heros',
    icon: 'supervised-user-circle',
    type: ''
  },
]
const PROFILE = [
  {
    "name": "Nahyun An",
    "Age": "22",
    "Gender": "Female",
    "avatar_url": "https://raw.githubusercontent.com/timkim0713/Cardian/master/application/assets/images/anna.png"
  }
]
export default function MyPageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View>
        {
          PROFILE.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar
                size="large"
                source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name} / {l.Gender}</ListItem.Title>
                <ListItem.Subtitle><Text style={styles.ratingText}>Age: {l.Age}</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text style={styles.ratingText}></Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text style={styles.ratingText}></Text></ListItem.Subtitle>
              </ListItem.Content>

            </ListItem>
          ))
        }
      </View>
      <View>
        {
          list.map((item, i) => (
            <ListItem key={i} bottomDivider>
              <Icon name={item.icon} type={item.type} />
              <ListItem.Content>
                <ListItem.Title>{item.title}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))
        }
      </View>
      <View style={{alignItems:'center'}}>
        <ImageBackground source={WATCH_IMG} style={{ width: 200, height: 300 }}>
          <View
            style={{
              marginTop: 83,
              marginLeft: 44,
              padding: 10,
              backgroundColor: 'black',
              width: 123,
              height: 140,
              borderRadius: 20,
            }}>
            <Text style={{ color: 'red', marginBottom: 8, fontSize: 12 }}>
              Cardian Activated
            </Text>
            <Text style={{ color: 'white', fontSize: 12 }}>❤️BPM: 0</Text>
            <Text style={{ color: 'white', fontSize: 12 }}>🩸Blood Type:AB</Text>
            <Text style={{ color: 'white', fontSize: 12 }}>Guardian Contact</Text>
            <Text style={{ color: 'white', fontSize: 12 }}> 010-2673-0623</Text>

            <Text style={{ color: ICON_COLOR, marginTop: 10 }}>
              "I am Pregnant"
            </Text>
          </View>
        </ImageBackground>

      </View>
    </View>
  );
}
