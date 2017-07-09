import React, { Component } from 'react';
import {View, Text, AppRegistry} from 'react-native';


export default class NewMedicine extends React.Component {
  render() {
    return(
      <View style={{backgroundColor: 'red'}}></View>
    );
  }
}

AppRegistry.registerComponent('NewMedicine', () => NewMedicine);
