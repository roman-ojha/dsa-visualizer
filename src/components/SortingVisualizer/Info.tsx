import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {stylesConst} from '../../constants';
import {useSelector} from 'react-redux';
import {AppState} from '../../redux';

const Info = (): JSX.Element => {
  const {sortingAlgorithm} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  return (
    <>
      <View style={styles.container}>
        <View style={styles.singleInfoContainer}>
          <View
            style={[
              styles.color,
              {backgroundColor: stylesConst.colors.primary['1000']},
            ]}
          />
          <Text style={styles.text}>Unsorted</Text>
        </View>
        {sortingAlgorithm === 'selection' ? (
          <View style={styles.singleInfoContainer}>
            <View
              style={[
                styles.color,
                {backgroundColor: stylesConst.colors.secondary3['1000']},
              ]}
            />
            <Text style={styles.text}>Minimum</Text>
          </View>
        ) : (
          ''
        )}
        <View style={styles.singleInfoContainer}>
          <View
            style={[
              styles.color,
              {backgroundColor: stylesConst.colors.secondary2['800']},
            ]}
          />
          <Text style={styles.text}>
            {sortingAlgorithm === 'selection'
              ? 'Comparing with min'
              : 'Comparing'}
          </Text>
        </View>
        <View style={styles.singleInfoContainer}>
          <View
            style={[
              styles.color,
              {backgroundColor: stylesConst.colors.secondary1['600']},
            ]}
          />
          <Text style={styles.text}>Sorted</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height: 50,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  singleInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    width: 15,
    height: 15,
    borderRadius: 8,
    marginRight: 8,
  },
  text: {
    fontSize: 15,
  },
});

export default Info;
