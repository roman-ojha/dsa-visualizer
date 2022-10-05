import React from 'react';
import {StyleSheet, View} from 'react-native';
import {stylesConst} from '../../constants';

const SelectedRail = (): JSX.Element => {
  return (
    <>
      <View style={styles.container} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: stylesConst.colors.secondary1['600'],
    height: 8,
  },
});

export default SelectedRail;
