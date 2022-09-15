import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0)
    return (
      <Text className="p-4 text-lg text-white">
        I haven't focused on anything yet...
      </Text>
    );

  const renderItem = ({ item }) => (
    <Text className="flex flex-row items-center justify-center mb-4 text-lg text-teal-50">
      <Ionicons name="md-checkmark-circle" size={20} color="#99f6e4" /> {item}
    </Text>
  );

  return (
    <View className="flex h-full p-4">
      <Text className="pb-6 text-lg font-medium text-white">
        Things I've focused on:
      </Text>
      <FlatList className="" data={history} renderItem={renderItem} />
    </View>
  );
};
