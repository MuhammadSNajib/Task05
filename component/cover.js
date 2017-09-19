import React, { Component } from 'react';
import {View, Image, ScrollView } from 'react-native';
import {Icon, Content, Thumbnail, Text} from 'native-base';

export default class Cover extends Component {
  render() {
    return (
      <Content>
        <Thumbnail square source={require('../img/sampul01.jpg')} style={{height: 150, width: 320}}/>
        <Icon name="camera" style={{color:'#FFFFFF', position:'absolute', zIndex:1, paddingLeft:291, paddingTop:120}} />
        <Thumbnail square source={require('../img/profil.png')} style={{height: 110, width: 110, position:'absolute', zIndex:2, margin:100, borderWidth:3, borderColor:'#FFFFFF'}}/>
        <Icon name="camera" style={{color:'#FFFFFF', position:'absolute', zIndex:3, paddingLeft:180, paddingTop:180}} />
        <Text style={{marginRight:120, marginLeft:125, marginTop:70}}>Via Vallen</Text>
      </Content>
    );
  }
}
