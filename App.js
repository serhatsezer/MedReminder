'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = ReactNative;

var MainTabbar = React.createClass({
  statics: {
    title: '<TabBarIOS>',
    description: 'Tab-based navigation.',
  },

  displayName: 'MainTabbar',

  getInitialState: function() {
    return {
      selectedTab: 'listTab',
      presses: 0,
    };
  },

  _renderContent: function(color: string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    );
  },

  render: function() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="white"
        barTintColor="#E03161">

        <TabBarIOS.Item
          title="List"
          selected={this.state.selectedTab === 'listTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'listTab',
            });
          }}>
          {this._renderContent('#414A8C', 'List Tab')}
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Med Reminder"
          selected={this.state.selectedTab === 'reminderTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'reminderTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Med Reminder', this.state.presses)}
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
