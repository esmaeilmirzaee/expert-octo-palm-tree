import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import ColourCounter from '../components/ColourCounter';

const COLOUR_INCREMENT = 25;

const reducer = (state, action) => {
  switch (action.colour) {
    case 'red':
      return { ...state, red: state.red + action.amount };
    case 'green':
      return { ...state, green: state.green + action.amount };
    case 'blue':
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state.red, state.green, state.blue);
  return (
    <View>
      <ColourCounter
        onIncrease={() => dispatch({ colour: 'red', amount: COLOUR_INCREMENT })}
        onDecrease={() =>
          dispatch({ colour: 'red', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Red'
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colour: 'green', amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colour: 'green', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Green'
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ colour: 'blue', amount: COLOUR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colour: 'blue', amount: -1 * COLOUR_INCREMENT })
        }
        colour='Blue'
      />
      <View
        style={{
          width: 64,
          height: 64,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
