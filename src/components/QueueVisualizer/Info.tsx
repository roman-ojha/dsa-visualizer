import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';
import {AppState} from '../../redux';
import {useSelector} from 'react-redux';

const Info = (): JSX.Element => {
  const {rare, front, size} = useSelector(
    (state: AppState) => state.queueVisualizer,
  );
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Rear: {rare}</Text>
        <Text style={styles.text}>Front: {front}</Text>
        <Text style={styles.text}>Size: {size}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenConst.screenWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontSize: 15,
  },
});

export default Info;
