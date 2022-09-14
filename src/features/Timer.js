import React, { useState } from 'react';
import { View, Text, Vibration } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/Countdown';
import { TouchableButton } from '../components/TouchableButton';
import { Timing } from './Timing';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  };

  return (
    <View className="w-full h-full">
      <View className="flex items-center justify-center h-2/5">
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
        <View className="w-full py-2">
          <Text className="pb-2 mx-auto text-xl font-normal text-white">
            Focusing on:
          </Text>
          <Text className="mx-auto text-2xl italic font-semibold text-teal-200">
            {focusSubject}
          </Text>
        </View>
      </View>
      <View className="">
        <ProgressBar
          color="#ccfbf1"
          progress={progress}
          className="h-4 mx-2 mb-8 rounded-full bg-teal-500/50"
        />
      </View>

      <View>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View className="flex items-center justify-center pb-6">
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
      <View className="flex items-center justify-center">
        <View className="flex items-center justify-center w-32 border rounded-full h-14 border-rose-500 bg-rose-500">
          <TouchableButton title="clear" onPress={clearSubject} />
        </View>
      </View>
    </View>
  );
};
