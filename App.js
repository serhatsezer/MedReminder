'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

import MedList from './screens/medlist/MedList'
import Medications from './screens/medications/Medications'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var MainTabbar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'listTab',
      presses: 0,
    };
  },

  _renderContent: function() {

    switch (this.state.selectedTab) {
      case 'listTab':
        return <MedList title="MedList"/>
      case 'medicationTab':
        return <Medications title="Medications" />
    }
  },

  render: function() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="white"
        barTintColor="#E03161"
        translucent={false}>
        <TabBarIOS.Item
          icon={require('./assets/icon-list.png')}
          title="List"
          renderAsOriginal
          selected={this.state.selectedTab === 'listTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'listTab',
            });
          }}>
          {this._renderContent()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./assets/icon-meds.png')}
          title="Medications"
          renderAsOriginal
          selected={this.state.selectedTab === 'medicationTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'medicationTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent()}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },
});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

module.exports = MainTabbar;
