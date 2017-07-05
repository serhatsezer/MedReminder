'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;

export default class MedReminder extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 100, padding: 20}}>
        <Text>Med Reminder</Text>
      </View>
    );
  }
}
