import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {stylesConst} from '../../constants';
import DequeueButton from './DequeueButton';
import EnqueueButton from './EnqueueButton';

const VisualizerField = (): JSX.Element => {
  const size = 18;
  // can only insert double digit number
  const array = [
    10,
    20,
    30,
    40,
    91,
    11,
    23,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  return (
    <View style={styles.container}>
      <EnqueueButton />
      <View style={styles.arrayContainer}>
        {array.map((elm, index) => {
          return (
            <View key={index} style={styles.arraySingleBox}>
              <Text style={styles.textElm}>{elm}</Text>
            </View>
          );
        })}
      </View>
      <DequeueButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    alignSelf: 'stretch',
  },
  arrayContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arraySingleBox: {
    backgroundColor: stylesConst.colors.primary[1000],
    margin: 1,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 33,
    height: 33,
  },
  textElm: {
    fontWeight: '700',
    fontSize: 15,
  },
});

export default VisualizerField;
