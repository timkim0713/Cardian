import React from 'react';
import { useState, useEffect } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'

import { Text, View, StyleSheet, ScrollView, Alert, RefreshControl, ActivityIndicator, Image } from 'react-native';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MedalIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const ICON_COLOR = '#FFCD4A';
const THEME_COLOR = '#242424';


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
    title: 'Apple Watch Connetion',
    icon: 'watch',
    type: 'MaterialIcons'
  },
  {
    title: 'Galaxy Watch Connection',
    icon: 'watch',
    type: 'Octicons'
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
    "name" : "Nahyun An",
    "Age" : "22",
    "Gender" : "Female",
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

    </View>
  );
}
