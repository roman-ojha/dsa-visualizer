import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = (): JSX.Element => {
  return <Text style={styles.text}>Queue</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Title;
