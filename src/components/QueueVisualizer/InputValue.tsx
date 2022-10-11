import React from 'react';
import {StyleSheet, View} from 'react-native';

const InputValue = (): JSX.Element => {
  return <View style={styles.container}>{/* Input Value Field */}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

export default InputValue;
