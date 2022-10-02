import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {stylesConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const SortingField = (): JSX.Element => {
  const {array} = useSelector((state: AppState) => state.sortingVisualizer);

  return (
    <>
      <View style={styles.container}>
        {array.map((elm, key) => (
          <View
            key={key}
            style={[
              styles.arrayItem,
              {height: elm.item * 2.1},
              elm.sorted
                ? {backgroundColor: stylesConst.colors.secondary1['600']}
                : elm.sorting
                ? {backgroundColor: stylesConst.colors.secondary2['800']}
                : {backgroundColor: stylesConst.colors.primary['1000']},
            ]}>
            <Text style={styles.itemNumber}>{elm.item}</Text>
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
    // backgroundColor: stylesConst.colors.primary[1000],
    marginRight: 2,
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
