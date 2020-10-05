import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxExerciseScreen = () => {
  return (
    <View style={styles.viewBox}>
      <View style={styles.viewBox1} />
      <View style={styles.viewBox2} />
      <View style={styles.viewBox3} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200,
    borderWidth: 1,
  },
  viewBox1: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  viewBox2: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginTop: 50,
  },
  viewBox3: {
    height: 50,
    width: 50,
    backgroundColor: 'purple',
  },
});

export default BoxExerciseScreen;
