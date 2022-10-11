import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';

const Info = (): JSX.Element => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Rear: 3</Text>
        <Text style={styles.text}>Front: 1</Text>
        <Text style={styles.text}>Size:30</Text>
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
