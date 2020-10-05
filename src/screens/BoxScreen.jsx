import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box</Text>
      <Text style={styles.textStyle}>Box</Text>
      <Text style={styles.textStyle}>Box</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 5,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default BoxScreen;
