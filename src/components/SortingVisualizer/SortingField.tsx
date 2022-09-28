import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import generateRandomArray from '../../utils/generateRandomArray';
import {stylesConst} from '../../constants';

const SortingField = (): JSX.Element => {
  const [array] = useState<number[]>(generateRandomArray(25));
  //   const array = generateRandomArray(20);
  console.log(array);
  return (
    <>
      <View style={styles.container}>
        {array.map((item, key) => (
          <View key={key} style={[styles.arrayItem, {height: item * 2.1}]}>
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
  },
  arrayItem: {
    backgroundColor: stylesConst.colors.primary[1000],
    marginRight: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 5,
  },
  itemNumber: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default SortingField;
