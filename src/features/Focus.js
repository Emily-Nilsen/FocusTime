import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableButton } from '../components/TouchableButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View className="flex w-full h-auto p-4 my-4">
      <View className="flex flex-row">
        <TextInput
          className="grow"
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View className="flex items-center justify-center w-16 h-16 ml-2 rounded-full bg-t">
          <View className="flex items-center justify-center w-16 h-16 border border-teal-200 rounded-full">
            <TouchableButton title="+" onPress={() => addSubject(subject)} />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
