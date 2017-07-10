import React, { Component } from 'react';
import {View, Text, AppRegistry} from 'react-native';

export default class MedReminder extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: 'red'}}></View>
    );
  }
}

AppRegistry.registerComponent('MedReminder', () => MedReminder);
