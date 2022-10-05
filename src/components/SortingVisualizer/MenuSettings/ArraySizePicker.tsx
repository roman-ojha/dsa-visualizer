import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RangeSlider from 'rn-range-slider';
import SelectedRail from '../../RangeSlider/SelectedRail';
import Rail from '../../RangeSlider/Rail';
import Thumb from '../../RangeSlider/Thumb';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import Notch from '../../RangeSlider/Notch';
import {bindActionCreators} from 'redux';
import {maximumSortingArraySize} from '../../../redux/sortingVisualizer/types';

const ArraySizePicker = (): JSX.Element => {
  const dispatch = useDispatch();
  const min: number = 10;
  const {arraySize} = useSelector((state: AppState) => state.sortingVisualizer);
  const {changeSortingArraySize} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Array Size: </Text>
          <Text style={styles.speedText}>{arraySize}</Text>
        </View>
        <View style={styles.rangeContainer}>
          <Text style={styles.minText}>{min}</Text>
          <RangeSlider
            min={min}
            max={maximumSortingArraySize}
            step={1}
            disableRange
            floatingLabel={true}
            low={arraySize}
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
            renderNotch={useCallback(
              () => (
                <Notch payload={arraySize} />
              ),
              [arraySize],
            )}
            onValueChanged={low => {
              const sortingArraySize: number = low;
              if (sortingArraySize !== arraySize) {
                changeSortingArraySize(sortingArraySize);
              }
            }}
          />
          <Text style={styles.maxText}>{maximumSortingArraySize}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  rangeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
  },
  speedRangeContainer: {
    width: 150,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    margin: 10,
    fontSize: 15,
  },
  speedText: {
    color: 'white',
  },
  minText: {
    color: 'white',
  },
  maxText: {
    color: 'white',
  },
});

export default ArraySizePicker;
