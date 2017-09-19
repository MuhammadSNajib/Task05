import React, { Component } from 'react';
import {View} from 'react-native';
import {Content, Text, Icon, Card, CardItem, Item, Thumbnail, Input} from 'native-base';

export default class Post extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>
          <Card style={{marginLeft:-5, marginRight:-5}}>
            <CardItem style={{flexWrap: 'wrap'}}>
              <Item>
                <Thumbnail source={require('../img/profil.png')} style={{width:40, height:40}}/>
                <Input placeholder='Apa yang Anda pikirkan?' style={{fontSize:13}}/>
              </Item>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name='videocam' style={{fontSize: 15, color: '#dd3c10', paddingTop:5}} />
                  <Text style={{fontSize:9, color:'#333', paddingTop:8, marginLeft:-15}}>Siaran Langsung</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft:36}}>
                  <Icon name='images' style={{fontSize: 15, color: '#69a74e', paddingTop:5}} />
                  <Text style={{fontSize:9, color:'#333', paddingTop:8, marginLeft:-15}}>Foto</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft:36}}>
                  <Icon name='flag' style={{fontSize: 15, color: '#1a356e', paddingTop:5}} />
                  <Text style={{fontSize:9, color:'#333', paddingTop:8, marginLeft:-15}}>Peristiwa Penting</Text>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>


    );
  }
}
