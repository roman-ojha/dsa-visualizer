import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {stylesConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const SortingField = (): JSX.Element => {
  const {array, arraySize} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );

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
              arraySize > 40 && arraySize <= 50
                ? {width: 10}
                : arraySize > 50 && arraySize <= 60
                ? {width: 9}
                : arraySize > 60 && arraySize <= 70
                ? {width: 7}
                : arraySize > 70 && arraySize <= 80
                ? {width: 6}
                : {},
            ]}>
            {arraySize <= 40 ? (
              <Text
                style={[
                  styles.itemNumber,

                  arraySize >= 10 && arraySize <= 25
                    ? {fontSize: 15}
                    : arraySize >= 25 && arraySize <= 30
                    ? {fontSize: 13}
                    : arraySize >= 30 && arraySize <= 40
                    ? {fontSize: 8}
                    : {},
                ]}>
                {elm.item}
              </Text>
            ) : (
              <></>
            )}
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
    marginRight: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
    borderRadius: 5,
  },
  itemNumber: {
    fontWeight: 'bold',
  },
});

export default SortingField;
