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
import MedReminder from './screens/medreminder/MedReminder'

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
        return <MedList />
      case 'reminderTab':
        return <MedReminder />
    }
  },

  render: function() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="white"
        barTintColor="#E03161">

        <TabBarIOS.Item
          systemIcon="history"
          title="List"
          selected={this.state.selectedTab === 'listTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'listTab',
            });
          }}>
          {this._renderContent()}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="more"
          title="Med Reminder"
          selected={this.state.selectedTab === 'reminderTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'reminderTab',
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
});

module.exports = MainTabbar;
