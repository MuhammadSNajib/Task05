import React, { Component } from 'react';
import {View} from 'react-native';
import {Content, Text, FooterTab, Button} from 'native-base';


export default class Menu extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>
          <View style={{backgroundColor:'#f2f2f2'}}>
            <FooterTab style={{height:40}}>
              <Button>
                <Text style={{fontSize:12, fontWeight:'bold'}}>TENTANG</Text>
              </Button>
              <Button>
                <Text style={{fontSize:12, fontWeight:'bold'}}>FOTO</Text>
              </Button>
              <Button>
                <Text style={{fontSize:12, fontWeight:'bold'}}>TEMAN</Text>
              </Button>
            </FooterTab>
          </View>
        </Content>


    );
  }
}
