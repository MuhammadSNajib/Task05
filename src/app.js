import React, { Component } from 'react';
import {ScrollView } from 'react-native';
import {Container} from 'native-base';

import Header1 from '../component/header';
import Contents from '../component/content';
import Footer1 from '../component/footer';

export default class Index extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#fff'}}>

        {/* HEADER from ../component/header */}
        <Header1/>

        {/* CONTENT from ../component/content */}
        <ScrollView>
          <Contents/>
        </ScrollView>

        {/* FOOTER from ../component/footer */}
        <Footer1/>
        </Container>
    );
  }
}
