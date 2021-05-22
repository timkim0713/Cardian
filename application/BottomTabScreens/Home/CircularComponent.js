import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  TouchableOpacity,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

export default class CircularComponent extends Component {
  constructor() {
    super();
    this.animated = new Animated.Value(0);
    var inputRange = [0, 1];
    var outputRange = ['0deg', '360deg'];
    this.rotate = this.animated.interpolate({inputRange, outputRange});
    outputRange = ['0deg', '-360deg'];
    this.rotateOpposite = this.animated.interpolate({inputRange, outputRange});
  }

  animate() {
    Animated.loop(
      Animated.timing(this.animated, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }
  render() {
    const transform = [{rotate: this.rotate}];
    const transform1 = [{rotate: this.rotateOpposite}];
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.item, {transform}]}>
          <Animated.View style={[styles.dot, {transform: transform1}]}>
            <FAIcon name="car-side" size={24} />
          </Animated.View>
        </Animated.View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: '35%',
          }}>
          <TouchableOpacity
            onPressIn={() => {
              this.animate();
            }}
            // onPressOut={()=>{

            // }}
            onPress={() => {
              alert('help me');
            }}>
            <View
              style={{
                borderRadius: 100,
                padding: 20,
                backgroundColor: 'white',
                borderColor: 'black',
                borderWidth: 5,
                fontWeight: '800',
                fontSize: 16,
                width: 200,
                height: 200,
              }}>
              <Text
                style={{
                  marginTop: 55,
                  textAlign: 'center',
                  padding: 0,
                  backgroundColor: 'white',
                  fontWeight: '800',
                  fontSize: 40,
                  letterSpacing: 10,
                  fontWeight: 'bold',
                }}>
                SOS
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    position: 'absolute',
    width: 100,
    height: 200, // this is the diameter of circle
  },
  dot: {
    width: '100%',
    height: 20,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  text: {
    color: '#fff',
  },
});
