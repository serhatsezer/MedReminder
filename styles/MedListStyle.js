'use strict'

import { StyleSheet } from 'react-native';

export const MedListStyle = StyleSheet.create({
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

module.exports = MedListStyle;
