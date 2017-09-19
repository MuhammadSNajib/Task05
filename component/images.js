import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Content, Text, Icon, Button, Item, Input, Card, CardItem} from 'native-base';


export default class Photo extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>
          <Card style={{marginLeft:-5, marginRight:-5, marginTop:-0.10}}>
            <CardItem style={{}}>
              <View style={{flexDirection: 'row', alignSelf:'flex-start', position:'absolute', zIndex:1, paddingTop:5, paddingLeft:10}}>
                <Icon name='md-images' style={{fontSize: 20, color: '#69a74e'}} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'#333', paddingTop:4, marginLeft:-8}}>Foto</Text>
              </View>

              <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
                <Image source={require('../img/Foto01.jpg')} style={{width:153, height:153, marginLeft:-6, marginTop:20}}/>
                <Image source={require('../img/Foto02.jpg')} style={{width:153, height:153, marginLeft:5, marginRight:-10, marginTop:20}}/>
                <Image source={require('../img/Foto03.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:-6}}/>
                <Image source={require('../img/Foto04.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:5}}/>
                <Image source={require('../img/Foto05.jpg')} style={{width:100.8, height:100, marginTop:5, marginLeft:5, marginRight:-10}}/>
                <Text style={{fontSize:12, textAlign:'center', color:'#333', paddingTop:10, paddingLeft:90}}>Lihat Semua Foto</Text>
                <Icon name="arrow-forward" style={{color:'#333', fontSize:12, paddingTop:12, marginLeft:5}}/>
              </View>
            </CardItem>
          </Card>
        </Content>


    );
  }
}
