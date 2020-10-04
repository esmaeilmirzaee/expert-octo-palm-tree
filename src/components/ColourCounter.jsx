import React from 'react';
import { Button } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View style={{ margin: 5 }}>
      <Text>{colour}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${colour}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${colour}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColourCounter;
