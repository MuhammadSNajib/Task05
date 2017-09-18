import React, { Component } from 'react';
import {Header, Icon, Button, Item, Input} from 'native-base';

export default class Header1 extends Component {
  render() {
    return (
      <Header searchBar style={{backgroundColor:'#3b5998'}}>
        <Button transparent>
          <Icon name="arrow-back" style={{color:'#FFFFFF'}}/>
        </Button>
        <Item style={{backgroundColor:'#1D4088'}}>
          <Icon name="md-search" style={{color:'#FFFFFF'}}/>
          <Input value="Via Vallen" style={{color:'#FFFFFF'}}/>
        </Item>
        <Button transparent>
          <Icon name="md-settings" style={{color:'#FFFFFF'}}/>
        </Button>
      </Header>
    );
  }
}
