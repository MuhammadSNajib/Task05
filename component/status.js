import React, { Component } from 'react';
import {Image} from 'react-native';
import {Content, Text, Icon, Thumbnail, Input, Card, CardItem, Left, Body, Right} from 'native-base';

export default class Status extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>
          <Card style={{marginLeft:-5, marginRight:-5, marginTop:-0.10}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../img/profil.png')} style={{width:40, height:40}}/>
                <Body>
                  <Text style={{fontSize:12}}>Via Vallen</Text>
                  <Text note style={{fontSize:11}}>18 Sep pukul 10.16</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../img/Foto03.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="md-thumbs-up" style={{fontSize:25, color:'#29447E'}}/>
                <Text note style={{fontSize:11, marginLeft:5}}> Siska dan 1101 lainnya</Text>
              </Left>
              <Right>
                <Text note style={{fontSize:11}}>10121 Komentar</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="md-thumbs-up"/>
              </Left>
              <Body style={{paddingLeft:50}}>
                <Icon name="text"/>
              </Body>
              <Right>
                <Icon name="redo" style={{fontSize:35}}/>
              </Right>
            </CardItem>
          </Card>
        </Content>


    );
  }
}
