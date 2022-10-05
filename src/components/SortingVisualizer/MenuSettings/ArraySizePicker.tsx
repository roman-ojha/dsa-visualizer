import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {SortingVisualizerState} from '../../../redux/sortingVisualizer/types';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

interface ItemInterface extends Item {
  label: SortingVisualizerState['title'];
  value: SortingVisualizerState['sortingAlgorithm'];
}

const AlgorithmPicker = (): JSX.Element => {
  const dispatch = useDispatch();
  const {sortingAlgorithm} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {changeSortingAlgorithm} = bindActionCreators(actionCreators, dispatch);
  const item: ItemInterface[] = [
    {
      label: 'Bubble Sort',
      value: 'bubble',
    },
    {
      label: 'Insertion Sort',
      value: 'insertion',
    },
    {
      label: 'Merge Sort',
      value: 'merge',
    },
    {
      label: 'Quick Sort',
      value: 'quick',
    },
  ];
  return (
    <View style={styles.choseAlgorithmContainer}>
      <Text style={styles.selectAlgorithmText}>Select an Algorithm:</Text>
      <RNPickerSelect
        items={item}
        onValueChange={value => changeSortingAlgorithm(value)}
        value={sortingAlgorithm}
        style={{
          viewContainer: {
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 8,
            height: 40,
            display: 'flex',
            justifyContent: 'center',
          },
          inputAndroid: {
            color: 'white',
          },
        }}
        placeholder={{
          label: 'select an algorithm...',
          value: null,
          color: 'gray',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  choseAlgorithmContainer: {
    display: 'flex',
  },
  selectAlgorithmText: {
    color: 'white',
    margin: 10,
    fontSize: 15,
  },
});

export default AlgorithmPicker;
