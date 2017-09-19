import React, { Component } from 'react';
import {View, Image} from 'react-native';
import {Content, Text, Icon, Card, CardItem} from 'native-base';

export default class Friend extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>
          {/*TEMAN*/}
          <Card style={{marginLeft:-5, marginRight:-5, marginTop:-0.10}}>
            <CardItem style={{}}>
              <View style={{flexDirection: 'row', alignSelf:'flex-start', position:'absolute', zIndex:1, paddingTop:5, paddingLeft:10}}>
                <Icon name='md-people' style={{fontSize: 20, color: '#FF007F'}} />
                <Text style={{fontSize:13, fontWeight:'bold', color:'#333', paddingTop:4, marginLeft:-8}}>Teman <Text note style={{fontSize:9}}>3.508</Text></Text>
              </View>

              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/05.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20}}/>
                  <Text style={{marginLeft:-6, fontSize:12, color:'#000', fontWeight:'bold'}}>Dewi Santika</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:-6, marginTop:2}}/>
                  <Text note style={{marginLeft:4, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/T01.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20, marginLeft:5}}/>
                  <Text style={{marginLeft:5, fontSize:12, color:'#000', fontWeight:'bold'}}>Amalia Putri</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:5, marginTop:2}}/>
                  <Text note style={{marginLeft:15, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/T02.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20, marginLeft:5, marginRight:-5}}/>
                  <Text style={{marginLeft:5, fontSize:12, color:'#000', fontWeight:'bold'}}>Dwi Fatmawati</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:5, marginTop:2}}/>
                  <Text note style={{marginLeft:15, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/ria-ricis04.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20}}/>
                  <Text style={{marginLeft:-6, fontSize:12, color:'#000', fontWeight:'bold'}}>Ria Ricis</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:-6, marginTop:2}}/>
                  <Text note style={{marginLeft:4, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/adit.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20, marginLeft:5}}/>
                  <Text style={{marginLeft:5, fontSize:12, color:'#000', fontWeight:'bold'}}>Aditya Dwi</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:5, marginTop:2}}/>
                  <Text note style={{marginLeft:15, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <View style={{flexWrap: 'wrap'}}>
                  <Image source={require('../img/syifa-hadju03.jpg')} style={{width:100, height:100, marginLeft:-6, marginTop:20, marginLeft:5, marginRight:-5}}/>
                  <Text style={{marginLeft:5, fontSize:12, color:'#000', fontWeight:'bold'}}>Syifa Hadju</Text>
                  <Icon name='radio-button-on' style={{fontSize: 8, color: '#1a356e', marginLeft:5, marginTop:2}}/>
                  <Text note style={{marginLeft:15, fontSize:9, color:'#333', marginTop:-11}}>8 kiriman baru</Text>
                </View>
                <Text style={{fontSize:12, textAlign:'center', color:'#333', paddingTop:10, paddingLeft:90}}>Lihat Semua Teman</Text>
                <Icon name="arrow-forward" style={{color:'#333', fontSize:12, paddingTop:12, marginLeft:5}}/>
              </View>
            </CardItem>
          </Card>
        </Content>


    );
  }
}
