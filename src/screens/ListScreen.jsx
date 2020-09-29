import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 30 },
    { name: 'Friend #4', age: 21 },
    { name: 'Friend #5', age: 22 },
    { name: 'Friend #6', age: 40 },
    { name: 'Friend #7', age: 43 },
    { name: 'Friend #8', age: 60 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <View>
            <Text style={styles.textStyle}>
              {item.name} - Age {item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
