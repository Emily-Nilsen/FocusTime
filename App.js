import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="items-center justify-center flex-1 bg-rose-200">
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
