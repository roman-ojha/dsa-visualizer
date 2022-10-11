import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';

const Status = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.status}>Queue full</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  status: {
    color: 'red',
    fontSize: 15,
  },
});

export default Status;
