import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import generateRandomArray from '../../utils/generateRandomArray';
import {stylesConst, screenConst} from '../../constants';

const SortingField = (): JSX.Element => {
  //   const [array] = useState<number[]>(generateRandomArray(20));
  const array = generateRandomArray(20);
  console.log(array);
  return (
    <>
      <View style={styles.container}>
        {array.map((item, key) => (
          <View key={key} style={[styles.arrayItem, {width: item * 2.5}]}>
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
    justifyContent: 'center',
    alignItems: 'center',
    width: screenConst.screenWidth - 100,
  },
  arrayItem: {
    backgroundColor: stylesConst.colors.primary[1000],
    marginBottom: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 8,
  },
  itemNumber: {
    transform: [{rotate: '90deg'}],
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default SortingField;
