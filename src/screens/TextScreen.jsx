import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length <= 5 ? (
        <Text style={{ fontSize: 10, color: 'red' }}>
          Password must be longer than 5 characters.
        </Text>
      ) : (
        <Text>{password.length}</Text>
      )}
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
