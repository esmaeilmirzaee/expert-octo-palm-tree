import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ColourScreen = () => {
  return (
    <View>
      <Button title='Add a colour' />
      <View style={{ height: 64, width: 64, backgroundColor: randomRGB() }} />
    </View>
  );
};

const styles = StyleSheet.create({});

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColourScreen;
