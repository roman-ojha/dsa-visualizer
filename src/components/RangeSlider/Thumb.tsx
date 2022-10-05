import React from 'react';
import {StyleSheet, View} from 'react-native';
import {stylesConst} from '../../constants';

const Thumb = (): JSX.Element => {
  return (
    <>
      <View style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: stylesConst.colors.primary['1000'],
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});

export default Thumb;
