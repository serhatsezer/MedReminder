'use strict';

import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, View, FlatList,Image, TouchableOpacity } from 'react-native';
import MedButton from '../../common/MedButton'
import MedReminder from '../medreminder/MedReminder'
import MedicationsStyle from '../../styles/MedicationsStyle'

export default class Medications extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MedicationsView,
          title: 'MEDICATIONS',
        }}
        style={{flex: 1}}
        barTintColor='#E03161'
        titleTextColor="#ffffff"
        translucent={false}
      />
    );
  }
}

class MedicationsView extends Component {

  constructor(props) {
    super(props);

    let dataSource = [
      {medName: 'Neurontin', dose: 1, image:require('../../assets/med3-on.png'), inTakeAmount:400, takenDays:["Mon, Tue, Wed, Thu, Fri"],  isTaken: true, key:"item1"},
      {medName: 'Aptiom', dose: 1, image:require('../../assets/med2-on.png'), inTakeAmount:200, takenDays:["Everyday"], isTaken: false, key:"item2"},
      {medName: 'Keppra', dose: 1, image:require('../../assets/med1-on.png'), inTakeAmount:1000, takenDays:["Mon, Fri"], isTaken: true, key:"item3"},
    ];

    this.state = {
      listDataSource: dataSource,
      isMedTaken: false
    };

  }
  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex,
    });
  }

  render() {
    return (
      <View style={MedicationsStyle.listView}>
        <FlatList
          data={this.state.listDataSource}
          onPress={()=> {
          }}
          renderItem={({item}) =>
              <View style={MedicationsStyle.row}>
              <View style={MedicationsStyle.timeline}>
                <Image style={MedicationsStyle.dot} source={item.image} />
              </View>
              <View style={MedicationsStyle.content}>
                <Text style={MedicationsStyle.medName}>{item.medName + " " + item.dose + " dose"} </Text>
                <Text style={MedicationsStyle.medTime}>{item.takenDays.length == 7 ? "everyday" : item.takenDays}</Text>
                    <View style={{paddingTop:10, flex:1, flexDirection:'row'}}>
                    <MedButton
                      label = {item.isTaken ? 'On' : 'Off'}
                      textStyle = {{color:'white', fontSize:12}}
                      onPress = {this.buttonPressed}
                    />
                    <MedButton
                      label='Edit'
                      buttonStyle={MedicationsStyle.medEditButton}
                      textStyle={{color:'#E03161', fontSize:12}}
                      onPress={this.buttonPressed}
                    />
                  </View>
              </View>
            </View>
          }/>
      </View>
    )
  }

  buttonPressed = (type: St) => {
    this.setState({
      isMedTaken: !this.state.isMedTaken
    })
  }
}
