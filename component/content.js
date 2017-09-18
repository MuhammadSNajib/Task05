import React, { Component } from 'react';
import {View, Image, ScrollView } from 'react-native';
import {Container, Item, Input, Icon, Button, Text, Content, FooterTab} from 'native-base';

import Tabs from './tabsMenu';

export default class Contents extends Component {
  render() {
    return (
        <Content>

          <Image source={require('../img/sampul01.jpg')} style={{height: 150, width: 320}}/>
          <Icon name="camera" style={{color:'#FFFFFF', position:'absolute', zIndex:1, paddingLeft:290, paddingTop:118}} />
          <Image source={require('../img/profil.png')} style={{height: 110, width: 110, position:'absolute', zIndex:2, margin:100, borderWidth:3, borderColor:'#FFFFFF'}}/>
          <Icon name="camera" style={{color:'#FFFFFF', position:'absolute', zIndex:3, paddingLeft:185, paddingTop:185}} />
          <Text style={{marginRight:120, marginLeft:125, marginTop:70}}>Via Vallen</Text>

          {/* TABS from tabsMenu*/}
          <Tabs/>

          <Text style={{fontSize:13, textAlign:'center', paddingLeft:10, paddingRight:10, paddingTop:5}}>Semangat Ngoding ya Sayaaaaaank.... wkwkwk #Kepengen Kawin</Text>
          <Text style={{fontSize:13, textAlign:'center', color:'blue'}}>Edit</Text>

          <Item style={{paddingTop:5}}>
            <Icon name='briefcase' style={{paddingLeft:10}} />
            <Text style={{fontSize:13}}>Bekerja sebagai </Text><Text style={{fontWeight:'bold', fontSize:13}}>Selebritis Local</Text>
          </Item>
          <Item>
            <Icon name='home' style={{paddingLeft:10}} />
            <Text style={{fontSize:13}}>Tingal di </Text><Text style={{fontWeight:'bold', fontSize:13}}>Kucica Blok 06 No. 11</Text>
          </Item>
          <Item>
            <Icon name='school' style={{paddingLeft:9}} />
            <Text style={{fontSize:13}}>Bersekolah di </Text><Text style={{fontWeight:'bold', fontSize:13}}>SMA N1 Tanggerang</Text>
          </Item>
          <Item>
            <Icon name='pin' style={{paddingLeft:13}} />
            <Text style={{fontSize:13}}>Dari </Text><Text style={{fontWeight:'bold', fontSize:13}}>Demak, Demak</Text>
          </Item>

          <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
            <Text style={{fontSize:13, textAlign:'center', color:'gray', marginLeft:5, marginTop:10}}>FEATURED PHOTOS</Text>
            <Text style={{fontSize:13, textAlign:'center', color:'blue', marginLeft:160, marginRight:5, marginTop:10}}>Edit</Text>
          </View>
          <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
            <Image source={require('../img/01.jpg')} style={{width:153, height:153, marginLeft:5, marginTop:5}}/>
            <Image source={require('../img/02.jpg')} style={{width:153, height:153, marginLeft:5, marginTop:5}}/>
            <Image source={require('../img/03.jpg')} style={{width:100, height:100, marginTop:5, marginLeft:5}}/>
            <Image source={require('../img/adit.jpg')} style={{width:100, height:100, marginTop:5, marginLeft:5}}/>
            <Image source={require('../img/04.jpg')} style={{width:100, height:100, marginTop:5, marginLeft:5}}/>
          </View>

        </Content>
    );
  }
}
