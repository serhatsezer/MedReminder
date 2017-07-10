'use strict'

import { StyleSheet } from 'react-native';

export const MedicationsStyle = StyleSheet.create({
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
 medEditButton: {
   borderWidth:1,
   borderColor:'#E03161',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
 },
 onButtonStyle: {
   backgroundColor:'#00CC00',
   alignItems:'center',
   justifyContent:'center',
   width:50,
   height:25,
   borderRadius:30,
   marginRight:10
 },
 offButtonStyle: {
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

module.exports = MedicationsStyle;
