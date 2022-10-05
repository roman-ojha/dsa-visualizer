import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Menu from '../../Menu';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {SortingVisualizerState} from '../../../redux/sortingVisualizer/types';
import {screenConst} from '../../../constants';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import SpeedRange from './SpeedRange';

interface ItemInterface extends Item {
  label: SortingVisualizerState['title'];
  value: SortingVisualizerState['sortingAlgorithm'];
}

const MenuSettings = (): JSX.Element => {
  const dispatch = useDispatch();
  const containerSize = 300;
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
    <>
      <Menu size={containerSize}>
        <View style={[{width: containerSize - 40}, styles.container]}>
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
          <SpeedRange />
        </View>
      </Menu>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: screenConst.screenWidth - 25,
  },
  choseAlgorithmContainer: {
    display: 'flex',
  },
  selectAlgorithmText: {
    color: 'white',
    margin: 10,
    fontSize: 15,
  },
  rangeSliderContainer: {
    height: screenConst.screenWidth - 200,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default MenuSettings;
