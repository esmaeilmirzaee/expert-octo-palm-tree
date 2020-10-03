import React, { useState } from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';

const ColourScreen = () => {
  const [colours, setColours] = useState([]);
  return (
    <View>
      <Button
        title='Add a colour'
        onPress={() => {
          setColours([...colours, randomRGB()]);
        }}
      />
      <FlatList
        keyExtractor={(index) => index}
        data={colours}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 64, width: 64, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColourScreen;
