import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = (props) => {
  const myName = 'Esmaeil';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native!</Text>
      <Text style={styles.myName}>My name is {myName}</Text>
      <Button
        style={styles.text}
        title='Tap'
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button
        title='List Demo'
        onPress={() => props.navigation.navigate('List')}
      />
      <Button
        title='Images'
        onPress={() => props.navigation.navigate('Images')}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button
        title='Go to colour demo'
        onPress={() => props.navigation.navigate('Colour')}
      />
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
