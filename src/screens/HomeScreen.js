import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  const myName = 'Esmaeil';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native!</Text>
      <Button
        style={styles.text}
        title='Tap'
        onPress={() => console.log('Button Pressed')}
      />
      <Text style={styles.myName}>My name is {myName}</Text>
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    margin: 10,
  },
  myName: {
    fontSize: 20,
  },
  buttonStyle: {
    color: '#000',
    backgroundColor: '#fee',
    fontSize: 30,
    padding: 10,
  },
});

export default HomeScreen;
