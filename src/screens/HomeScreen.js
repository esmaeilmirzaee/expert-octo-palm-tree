import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const myName = 'Esmaeil';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native!</Text>
      <Text style={styles.myName}>My name is {myName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  myName: {
    fontSize: 20,
  },
});

export default HomeScreen;
