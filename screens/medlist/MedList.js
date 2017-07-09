'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, FlatList,Image, TouchableOpacity, StyleSheet } from 'react-native';
import MedButton from '../../common/MedButton'


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
        translucent={false}
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
      {medName: 'Title Text 3', time: '14:50', isTaken: false, key:"item3"},
    ];

    this.state = {
      listDataSource: dataSource,
      item: null
    };

  }

  buttonPressed = () => {
    console.log('It\'s working.');
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

                <Image style={styles.dot} source={item.isTaken ? require('../../assets/med1-on.png') : require('../../assets/med1-no.png')} />

              </View>
              <View style={styles.content}>
                <Text style={styles.medName}>{item.medName} </Text>
                <Text style={styles.medTime}>{item.time}</Text>

              {/*
                  I had to write if condition
                  https://stackoverflow.com/questions/22538638/how-to-have-conditional-elements-and-keep-dry-with-facebook-reacts-jsx
              */}
                  {item.isTaken && (
                    <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>
                    <MedButton
                      label='Taken'
                      buttonStyle={styles.medTakenButton}
                      textStyle={{color:'white', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                    <MedButton
                      label='Edit'
                      buttonStyle={styles.medEditButton}
                      textStyle={{color:'#E03161', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                  </View>
                  )}
                  {(item.isTaken == false) && (
                    <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>

                    <MedButton
                      label='Take'
                      buttonStyle={styles.takeButton}
                      textStyle={{color:'#00CC00', fontSize:12}}
                      onPress={this.buttonPressed}
                    />

                    <MedButton
                      label='Forgot'
                      buttonStyle={styles.forgotButton}
                      textStyle={{color:'#ffffff', fontSize:12}}
                      onPress={this.buttonPressed}
                    />

                    <MedButton
                      label='Edit'
                      buttonStyle={styles.medEditButton}
                      textStyle={{color:'#E03161', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                  </View>
                )
              }
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
   marginTop:-80,
   backgroundColor:'white'
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
   backgroundColor:'#00CC00',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
   marginRight:10
 },
 medEditButton: {
   borderWidth:1,
   borderColor:'#E03161',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
 },
 takeButton: {
   borderWidth:1,
   borderColor:'#00CC00',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
   marginRight:10
 },
 forgotButton: {
   borderWidth:1,
   borderColor:'#E03161',
   backgroundColor:'#E03161',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
   marginRight:10
 }
});
