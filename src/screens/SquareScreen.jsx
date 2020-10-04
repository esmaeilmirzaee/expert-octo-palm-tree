import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ColourCounter from '../components/ColourCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);
  return (
    <View>
      <ColourCounter
        onIncrease={() => setRed(red + 1)}
        onDecrease={() => setRed(red - 1)}
        colour='Red'
      />
      <ColourCounter
        onIncreae={() => setGreen(green + 1)}
        onDecrease={() => setGreen(green - 1)}
        colour='Green'
      />
      <ColourCounter
        onIncrease={() => setBlue(blue + 1)}
        onDecrease={() => setBlue(blue - 1)}
        colour='Blue'
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
