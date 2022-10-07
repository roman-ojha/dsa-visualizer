import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const Info = (): JSX.Element => {
  const {topOfStack, stackSize, stack} = useSelector(
    (state: AppState) => state.stackVisualizer,
  );
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>
          Top of Stack: {stack[topOfStack]} ({topOfStack})
        </Text>
        <Text style={styles.text}>Size: {stackSize}</Text>
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
