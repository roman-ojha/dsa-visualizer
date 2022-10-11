import React from 'react';
import {StyleSheet, View} from 'react-native';

const VisualizerField = (): JSX.Element => {
  return <View style={styles.container}>{/* Queue Visualizer Field */}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'stretch',
  },
});

export default VisualizerField;
