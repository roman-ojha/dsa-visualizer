import React from 'react';
import {StyleSheet, View} from 'react-native';

const Rail = (): JSX.Element => {
  return (
    <>
      <View style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 130,
    height: 8,
  },
});

export default Rail;
