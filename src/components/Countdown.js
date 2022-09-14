import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);
export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);

  const reset = () => setMillis(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <View className="flex items-center justify-center w-full h-1/2">
      <View className="flex items-center justify-center px-8 pb-5 my-3 pt-7 -pb-2 bg-teal-500/90 rounded-2xl">
        <Text className="p-1 text-6xl font-bold text-white">
          {formatTime(minute)}:{formatTime(seconds)}
        </Text>
      </View>
    </View>
  );
};
