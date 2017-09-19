import React, { Component } from 'react';
import {View, Image, ScrollView } from 'react-native';
import {Container, Item, Input, Icon, Button, Text, Content, FooterTab} from 'native-base';

export default class Tabs extends Component {
  render() {
    return (
      <Content style={{backgroundColor:'#fff'}}>
        <FooterTab>
          <Button vertical>
            <Icon name="create" />
            <Text style={{fontSize:10}}>New Post</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text style={{fontSize:10}}>Update</Text>
          </Button>
          <Button vertical>
            <Icon name="list-box" />
            <Text style={{fontSize:10}}>Activity</Text>
          </Button>
          <Button vertical>
            <Icon name="more" />
            <Text style={{fontSize:10}}>More</Text>
          </Button>
        </FooterTab>
      </Content>
    );
  }
}
