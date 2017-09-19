import React, { Component } from 'react';
import {Item, Icon, Text, Content} from 'native-base';

export default class Profile extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#fff'}}>
          <Item style={{paddingTop:5}}>
            <Icon name='briefcase' style={{fontSize:15, paddingLeft:10, color:'#333'}} />
            <Text style={{fontSize:12, color:'#333'}}>Bekerja sebagai </Text><Text style={{fontWeight:'bold', fontSize:12, color:'#333'}}>Selebritis Local</Text>
          </Item>
          <Item>
            <Icon name='home' style={{fontSize:15, paddingLeft:10, color:'#333'}} />
            <Text style={{fontSize:12, color:'#333'}}>Tingal di </Text><Text style={{fontWeight:'bold', fontSize:12, color:'#333'}}>Kucica Blok 06 No. 11</Text>
          </Item>
          <Item>
            <Icon name='school' style={{fontSize:15, paddingLeft:9, color:'#333'}} />
            <Text style={{fontSize:12, color:'#333'}}>Bersekolah di </Text><Text style={{fontWeight:'bold', fontSize:12, color:'#333'}}>SMA N1 Tanggerang</Text>
          </Item>
          <Item>
            <Icon name='heart' style={{fontSize:15, paddingLeft:9, color:'#333'}} />
            <Text style={{fontSize:12, color:'#333'}}>Berpacaran dengan </Text><Text style={{fontWeight:'bold', fontSize:12, color:'#333'}}>Aditya Dwi</Text>
          </Item>
          <Item>
            <Icon name='pin' style={{fontSize:15, paddingLeft:13, color:'#333'}} />
            <Text style={{fontSize:12, color:'#333'}}>Dari </Text><Text style={{fontWeight:'bold', fontSize:12, color:'#333'}}>Demak, Demak</Text>
          </Item>
          <Text style={{fontSize:12, textAlign:'left', color:'#5875b2', marginLeft:31, marginTop:5, paddingBottom:10}}>SUNTING PERINCIAN</Text>
        </Content>

    );
  }
}
