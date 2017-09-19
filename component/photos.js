import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Text, Content} from 'native-base';

export default class Images extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#fff'}}>
          <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
            <Image source={require('../img/01.jpg')} style={{width:153, height:153, marginLeft:5, marginTop:5}}/>
            <Image source={require('../img/02.jpg')} style={{width:153, height:153, marginLeft:5, marginTop:5}}/>
            <Image source={require('../img/03.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:5}}/>
            <Image source={require('../img/adit.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:5}}/>
            <Image source={require('../img/04.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:5}}/>
          </View>
          <Text style={{fontSize:12, textAlign:'center', color:'#5875b2', paddingTop:5, paddingBottom:15}}>SUNTING FOTO UNGGULAN</Text>
        </Content>

    );
  }
}
