'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';

export default class MedReminder extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MedReminderView,
          title: 'Med Reminder',
        }}
        style={{flex: 1}}
        barTintColor='#E03161'
        titleTextColor="#ffffff"
      />
    );
  }
}

class MedReminderView extends Component {
  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
