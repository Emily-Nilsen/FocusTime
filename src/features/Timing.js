import React from 'react';
import { View } from 'react-native';
import { TouchableButton } from '../components/TouchableButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <View className="flex flex-row justify-between px-4 pb-6">
      <View className="flex items-center justify-center w-20 h-20 border border-teal-200 rounded-full">
        <TouchableButton title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View className="flex items-center justify-center w-20 h-20 border border-teal-200 rounded-full">
        <TouchableButton title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View className="flex items-center justify-center w-20 h-20 border border-teal-200 rounded-full">
        <TouchableButton title="20" onPress={() => onChangeTime(20)} />
      </View>
    </View>
  );
};
