import React from 'react';
import {StyleSheet, View} from 'react-native';
import EnqueueRandom from './EnqueueRandom';
import InputValue from './InputValue';

const InputAndEnqueueRandom = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <InputValue />
      <EnqueueRandom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default InputAndEnqueueRandom;
