import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title="+" />
      <Text>Count: {count}</Text>
      <Button
        onPress={() => setCount(count - 1)}
        title="-"
        disabled={count === 0}
      />
    </View>
  );
};

export default Counter;
