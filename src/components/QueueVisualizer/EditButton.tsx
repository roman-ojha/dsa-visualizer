import React from 'react';
import {StyleSheet, View} from 'react-native';

const EditButton = (): JSX.Element => {
  return <View style={styles.container}>{/* Edit button */}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'yellow',
  },
});

export default EditButton;
