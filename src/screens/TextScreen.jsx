import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text style={{ fontSize: 80 }}>{name}</Text>
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
