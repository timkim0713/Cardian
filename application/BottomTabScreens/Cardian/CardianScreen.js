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
    name: 'Daekyung Kim',
    avatar_url: 'https://raw.githubusercontent.com/timkim0713/Cardian/master/application/assets/images/DaeK.png',
    timeHelped: '03:32 AM',
    carNumber: 'Hyundai Avante, 9633',
    accidentLocation: 'Incheon, Songdo',
    phoneNumber: '010-2655-9573',

  },
  {
    name: 'Youngho Kim',
    avatar_url: 'https://raw.githubusercontent.com/timkim0713/Cardian/master/application/assets/images/Youngh.png',
    timeHelped: '11:43 PM',
    carNumber: 'Hyundai Sorento, 2763',
    accidentLocation: 'Seoul, Seocho',
    phoneNumber: '010-4853-7332',

  },
]

export default function CardianScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <View position="absolute" height={80}>
                <MedalIcon
                  name="medal"
                  color={ICON_COLOR}
                  size={30}
                />
              </View>
              <Avatar
                size="large"
                source={{ uri: l.avatar_url }} />

              <ListItem.Content>
                <ListItem.Title>{l.name} / {l.phoneNumber}</ListItem.Title>
                <ListItem.Subtitle><Text style={styles.ratingText}>Location: {l.accidentLocation}</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text style={styles.ratingText}>Time: {l.timeHelped}</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text style={styles.ratingText}>Car: {l.carNumber}</Text></ListItem.Subtitle>
              </ListItem.Content>

            </ListItem>
          ))
        }
      </View>
    </View>

  );
}

styles = StyleSheet.create({
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})






