import React, { Component } from 'react';
import {Icon, Button, Footer, FooterTab} from 'native-base';

export default class Footer1 extends Component {
  
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="card" />
          </Button>
          <Button vertical>
            <Icon name="people" />
          </Button>
          <Button vertical>
            <Icon name="text" />
          </Button>
          <Button vertical>
            <Icon name="globe" />
          </Button>
          <Button vertical>
            <Icon name="menu" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
