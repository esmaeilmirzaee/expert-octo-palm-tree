import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box</Text>
      <Text
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'black' }}
      >
        Box
      </Text>
      <Text style={styles.textStyle}>Box</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: 'blue',
    borderWidth: 1,
    padding: 5,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    alignSelf: 'center',
  },
});

export default BoxScreen;
