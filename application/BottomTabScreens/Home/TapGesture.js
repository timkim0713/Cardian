var React = require('react-native');

var {AppRegistry, StyleSheet, Animated, View, Text, TouchableWithoutFeedback} =
  React;

var ACTION_TIMER = 400;
var COLORS = ['rgb(255,255,255)', 'rgb(111,235,62)'];

export default function ButtonGage() {
  var AnimatedButtonPress = React.createClass({
    getInitialState: function () {
      return {
        pressAction: new Animated.Value(0),
        textComplete: '',
        buttonWidth: 0,
        buttonHeight: 0,
      };
    },
    componentWillMount: function () {
      this._value = 0;
      this.state.pressAction.addListener(v => (this._value = v.value));
    },
    handlePressIn: function () {
      Animated.timing(this.state.pressAction, {
        duration: ACTION_TIMER,
        toValue: 1,
      }).start(this.animationActionComplete);
    },
    handlePressOut: function () {
      Animated.timing(this.state.pressAction, {
        duration: this._value * ACTION_TIMER,
        toValue: 0,
      }).start();
    },
    animationActionComplete: function () {
      var message = '';
      if (this._value === 1) {
        message = 'You held it long enough to fire the action!';
      }
      this.setState({
        textComplete: message,
      });
    },
    getButtonWidthLayout: function (e) {
      this.setState({
        buttonWidth: e.nativeEvent.layout.width - 6,
        buttonHeight: e.nativeEvent.layout.height - 6,
      });
    },
    getProgressStyles: function () {
      var width = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: [0, this.state.buttonWidth],
      });
      var bgColor = this.state.pressAction.interpolate({
        inputRange: [0, 1],
        outputRange: COLORS,
      });
      return {
        width: width,
        height: this.state.buttonHeight,
        backgroundColor: bgColor,
      };
    },
    render: function () {
      return (
        <View style={styles.container}>
          <TouchableWithoutFeedback
            onPressIn={this.handlePressIn}
            onPressOut={this.handlePressOut}>
            <View style={styles.button} onLayout={this.getButtonWidthLayout}>
              <Animated.View
                style={[styles.bgFill, this.getProgressStyles()]}
              />
              <Text style={styles.text}>Press And Hold Me</Text>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Text>{this.state.textComplete}</Text>
          </View>
        </View>
      );
    },
  });
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111',
  },
  text: {
    backgroundColor: 'transparent',
    color: '#111',
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
