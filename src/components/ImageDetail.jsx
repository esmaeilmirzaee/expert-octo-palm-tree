import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
      <View style={styles.innerView}>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>{props.score}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  innerView: {
    alignContent: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default ImageDetail;
