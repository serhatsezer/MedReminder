'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, FlatList,Image, TouchableOpacity, StyleSheet } from 'react-native';

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
      {medName: 'Title Text',   time: '12:30', isTaken: true, key:"item1"},
      {medName: 'Title Text 2', time: '11:50', isTaken: true, key:"item2"},
      {medName: 'Title Text 3', time: '14:50', isTaken: true, key:"item3"},
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
          onPress={()=> {
          }}
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
                <Text style={styles.medName}>{item.medName}</Text>
                <Text style={styles.medTime}>{item.time}</Text>
                <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>
                  <TouchableOpacity
          style={{
            alignItems:'center',
             justifyContent:'center',
             width:50,
              height:25,
               backgroundColor:'#00cc00',
                borderRadius:30,
                marginRight:10
                 }}>
                 <Text style={{color:'white', fontSize:12}}>Taken</Text>
        </TouchableOpacity>

        <TouchableOpacity
style={{
  borderWidth:1,
           borderColor:'#E03161',
  alignItems:'center',
   justifyContent:'center',
   width:50,
    height:25,
      borderRadius:30,
       }}>
       <Text style={{color:'#E03161', fontSize:12}}>Edit</Text>
</TouchableOpacity>
        </View>
              </View>
            </View>
          }/>
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
   height:150,
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
   backgroundColor: '#D8D8D8',
 },
 bottomLine: {
   flex: 1,
   width: 2,
   backgroundColor: '#D8D8D8',
 },
 hiddenLine: {
   width: 0,
 },
 dot: {
   width: 25,
   height: 25,
   marginTop:-80
 },
 medName: {
   fontWeight: 'bold',
   fontSize: 16,
   paddingTop:18,
   color:'#E03161',
 },
 medTime: {
   fontSize:12,
   color:'gray'
 },
 medTakenButton: {
   backgroundColor:'green'
 },
 medEditButton: {

 }
});
