import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: '#006fdf',
    borderWidth: 1,
    height: 40,
  },
});

export default TextScreen;
