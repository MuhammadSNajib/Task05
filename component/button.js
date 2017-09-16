import React from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';
import {Icon} from 'native-base';

const Button = (props) => (
  <View>
    <TouchableOpacity onPress={props.onPress}>
      <Icon name='add-circle' />
    </TouchableOpacity>
  </View>
);

export default Button;
