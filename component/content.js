import React, { Component } from 'react';
import {View} from 'react-native';
import {Content, Text} from 'native-base';

import Tabs from './tabsMenu';
import Cover from './cover';
import Profile from './profile';
import Images from './photos';
import Menu from './menu';
import Post from './newPost';
import Photo from './images';
import Friend from './friend';
import Status from './status';

export default class Contents extends Component {
  render() {
    return (
        <Content style={{backgroundColor:'#888'}}>

          {/*PHOTO SAMPUL dan PROFIL from ./cover.js*/}
          <View style={{backgroundColor:'#fff'}}>
            <Cover/>
          </View>

          {/* TABS from ./tabsMenu.js*/}
          <Tabs/>

          {/*BIO*/}
          <View style={{backgroundColor:'#fff'}}>
            <Text style={{fontSize:12, textAlign:'center', paddingLeft:10, paddingRight:10, paddingTop:5}}>Semangat Ngoding ya Sayaaaaaank.... wkwkwk
            <Text style={{fontSize:12, color:'#5875b2'}}> #KepengenKawin</Text></Text>
            <Text style={{fontSize:12, textAlign:'center', color:'#5875b2', paddingTop:7}}>SUNTING BIO</Text>
          </View>

          {/*PERINCIAN PROFILE from ./profile.js*/}
          <Profile/>

          {/*FEATURED PHOTOS from ./photos.js*/}
          <Images/>

          {/*TAB MENU from ./menu.js*/}
          <Menu/>

          {/*NEW POST from newPost.js*/}
          <Post/>

          {/*PHOTOS*/}
          <Photo/>

          {/*TEMAN*/}
          <Friend/>

          {/*KIRIMAN atau POSTINGAN*/}
          <Status/>

        </Content>


    );
  }
}
