'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MedListView,
          title: 'TODAY\'S REMINDERS',
        }}
        style={{flex: 1,  barTintColor:'#E03161', tintColor: '#E03161' }}
      />
    );
  }
}

class MedListView extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

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
