import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const Status = (): JSX.Element => {
  const {status} = useSelector((state: AppState) => state.stackVisualizer);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.status}>{status}</Text>
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
