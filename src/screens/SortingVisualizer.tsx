import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import constants from '../constants';
import {mixins} from '../styles';
import generateRandomArray from '../utils/generateRandomArray';

const SortingVisualizer = (): JSX.Element => {
  console.log(generateRandomArray(20));
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <Text style={styles.text}>Sorting Visualizer</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 30, color: 'black'},
});

export default SortingVisualizer;
