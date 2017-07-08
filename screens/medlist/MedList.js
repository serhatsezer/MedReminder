'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, FlatList,Image, StyleSheet } from 'react-native';

export default class MedListNavigator extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MedListView,
          title: 'TODAY\'S REMINDERS',
        }}
        style={{flex: 1}}
        barTintColor='#E03161'
        titleTextColor="#ffffff"
      />
    );
  }
}

class MedListView extends Component {
  constructor(props) {
    super(props);

    let dataSource = [
      {title: 'Title Text', key: 'item1'},
      {title: 'Title Text 2', key: 'item2'},
      {title: 'Title Text 3', key: 'item3'},
      {title: 'Title Text 4', key: 'item4'}
    ];

    this.state = {
      listDataSource: dataSource
    };
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.listDataSource}
          renderItem={({item}) =>

        <View style={styles.row}>
        <View style={styles.timeline}>
          <View style={styles.line}>
            <View style={styles.topLine} />
            <View style={styles.bottomLine} />
          </View>
          <Image style={styles.dot} source={require('../../assets/med1-on.png')} />
        </View>
        <View style={styles.content}>
          <Text>{item.title}</Text>
        </View>
      </View>

        }
          />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 listView: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
 row: {
   padding: 4,
   paddingLeft: 0,
   height:120
 },
 content: {
   marginLeft: 40,
 },
 timeline: {
   position: 'absolute',
   top: 0,
   bottom: 0,
   left: 0,
   width: 40,
   justifyContent: 'center', // center the dot
   alignItems: 'center',
 },
 line: {
   position: 'absolute',
   top: 0,
   left: 18,
   width: 4,
   bottom: 0,
 },
 topLine: {
   flex: 1,
   width: 2,
   backgroundColor: 'gray',
 },
 bottomLine: {
   flex: 1,
   width: 2,
   backgroundColor: 'gray',
 },
 hiddenLine: {
   width: 0,
 },
 dot: {
   width: 25,
   height: 25,
   marginTop:-50
 },
});
