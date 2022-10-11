import React from 'react';
import {StyleSheet, View} from 'react-native';

const DequeueButton = (): JSX.Element => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    height: 50,
  },
});

export default DequeueButton;
