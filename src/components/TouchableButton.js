import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const TouchableButton = (props) => (
  <TouchableOpacity onPress={props.onPress}>
    <Text className="text-2xl text-teal-50">{props.title}</Text>
  </TouchableOpacity>
);
