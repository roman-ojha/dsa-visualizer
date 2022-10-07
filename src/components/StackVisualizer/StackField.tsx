import React from 'react';
import {StyleSheet, View} from 'react-native';
import {screenConst} from '../../constants';

const StackField = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth - 200,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default StackField;
