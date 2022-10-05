import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Menu from '../Menu';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {SortingVisualizerState} from '../../redux/sortingVisualizer/types';
import {screenConst, stylesConst} from '../../constants';
import {actionCreators, AppState} from '../../redux';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import RangeSlider from 'rn-range-slider';
import SelectedRail from '../RangeSlider/SelectedRail';
import Rail from '../RangeSlider/Rail';
import Thumb from '../RangeSlider/Thumb';

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
            <Text style={styles.selectAlgorithmText}>
              Select an Algorithm:{' '}
            </Text>
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
          <View style={styles.rangeSliderContainer}>
            {/* <MultiSlider
              min={10}
              max={100}
              vertical={true}
              step={10}
              containerStyle={{
                height: 30,
                // width: 50,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'green',
              }}
              trackStyle={{
                height: 10,
                backgroundColor: 'white',
                width: 50,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'red',
              }}
              markerStyle={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'yellow',
                height: 30,
                width: 30,
              }}
            /> */}
            <RangeSlider
              min={10}
              max={100}
              step={10}
              disableRange
              floatingLabel={true}
              low={50}
              style={styles.speedRangeContainer}
              renderThumb={useCallback(
                () => (
                  <Thumb />
                ),
                [],
              )}
              renderRail={useCallback(
                () => (
                  <Rail />
                ),
                [],
              )}
              renderRailSelected={useCallback(
                () => (
                  <SelectedRail />
                ),
                [],
              )}
            />
          </View>
        </View>
      </Menu>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: screenConst.screenWidth - 25,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
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
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'green',
    height: screenConst.screenWidth - 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  speedRangeContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    width: 150,
  },
});

export default MenuSettings;
