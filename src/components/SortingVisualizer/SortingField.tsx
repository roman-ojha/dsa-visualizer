import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import generateRandomArray from '../../utils/generateRandomArray';
import {stylesConst, screenConst} from '../../constants';

const SortingField = (): JSX.Element => {
  const [array] = useState<number[]>(generateRandomArray(20));
  //   const array = generateRandomArray(20);
  console.log(array);
  return (
    <>
      <View style={styles.container}>
        {array.map((item, key) => (
          <View key={key} style={[styles.arrayItem, {height: item * 2.5}]}>
            <Text style={styles.itemNumber}>{item}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: screenConst.screenHeight - 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  arrayItem: {
    backgroundColor: stylesConst.colors.primary[1000],
    marginRight: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 8,
  },
  itemNumber: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SortingField;
