'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, FlatList,Image, TouchableOpacity } from 'react-native';
import MedButton from '../../common/MedButton'
import NewMedicine from '../addmedicine/NewMedicine'
import MedListStyle from '../../styles/MedListStyle'

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
      listDataSource: dataSource
    };

  }

  buttonPressed = (type: St) => {
    this.props.navigator.push({
      component: NewMedicine,
      title: 'NEW MED REMINDER',
    });
  }

  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View style={MedListStyle.listView}>
        <FlatList
          data={this.state.listDataSource}
          onPress={()=> {
          }}
          renderItem={({item}) =>
              <View style={MedListStyle.row}>
              <View style={MedListStyle.timeline}>
                <View style={MedListStyle.line}>
                  <View style={MedListStyle.topLine} />
                  <View style={MedListStyle.bottomLine} />
                </View>

                <Image style={MedListStyle.dot} source={item.isTaken ? require('../../assets/med1-on.png') : require('../../assets/med1-no.png')} />

              </View>
              <View style={MedListStyle.content}>
                <Text style={MedListStyle.medName}>{item.medName} </Text>
                <Text style={MedListStyle.medTime}>{item.time}</Text>

              {/*
                  I had to write if condition
                  https://stackoverflow.com/questions/22538638/how-to-have-conditional-elements-and-keep-dry-with-facebook-reacts-jsx
              */}
                  {item.isTaken && (
                    <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>
                    <MedButton
                      label='Taken'
                      buttonStyle={MedListStyle.medTakenButton}
                      textStyle={{color:'white', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                    <MedButton
                      label='Edit'
                      buttonStyle={MedListStyle.medEditButton}
                      textStyle={{color:'#E03161', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                  </View>
                  )}
                  {(item.isTaken == false) && (
                    <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>

                    <MedButton
                      label='Take'
                      buttonStyle={MedListStyle.takeButton}
                      textStyle={{color:'#00CC00', fontSize:12}}
                      onPress={this.buttonPressed}
                    />

                    <MedButton
                      label='Forgot'
                      buttonStyle={MedListStyle.forgotButton}
                      textStyle={{color:'#ffffff', fontSize:12}}
                      onPress={this.buttonPressed}
                    />

                    <MedButton
                      label='Edit'
                      buttonStyle={MedListStyle.medEditButton}
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
