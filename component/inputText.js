/* @flow weak */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import {Item, Input} from 'native-base';

const InputText = (props) => (
  <View>
    <Item regular>
      <Input
        onChangeText={(text)=>props.onChangeText(text)}
        value={props.value}
        placeholder={props.placeholder}
      />
    </Item>
  </View>
);

export default InputText;
