import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {SortingVisualizerState} from '../../../redux/sortingVisualizer/types';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';

const SortingOrderPicker = (): JSX.Element => {
  const dispatch = useDispatch();
  const {sortingAlgorithm} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {changeSortingAlgorithm} = bindActionCreators(actionCreators, dispatch);
  return (
    <View style={styles.choseAlgorithmContainer}>
      <Text style={styles.selectAlgorithmText}>Select Order:</Text>
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

export default SortingOrderPicker;
