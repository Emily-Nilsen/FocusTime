import React, { useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { TouchableButton } from '../components/TouchableButton';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  return (
    <View className="w-full h-full">
      <View className="flex items-center justify-center h-1/2">
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={() => {
            Vibration.vibrate(PATTERN);
          }}
        />
        <View className="w-full py-4">
          <Text className="pb-4 mx-auto text-xl font-medium text-white">
            Focusing on:
          </Text>
          <Text className="mx-auto text-3xl italic font-bold text-teal-200">
            {focusSubject}
          </Text>
        </View>
      </View>
      <View className="">
        <ProgressBar
          color="#ccfbf1"
          progress={progress}
          className="h-6 mx-2 mb-6 rounded-full bg-teal-500/50"
        />
      </View>
      <View className="flex items-center justify-center">
        <View className="flex items-center justify-center w-32 h-32 border border-teal-200 rounded-full">
          {!isStarted && (
            <TouchableButton title="start" onPress={() => setIsStarted(true)} />
          )}
          {isStarted && (
            <TouchableButton
              title="pause"
              onPress={() => setIsStarted(false)}
            />
          )}
        </View>
      </View>
    </View>
  );
};
