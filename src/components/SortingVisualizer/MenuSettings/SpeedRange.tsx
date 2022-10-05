import React, {useCallback} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import RangeSlider from 'rn-range-slider';
import SelectedRail from '../../RangeSlider/SelectedRail';
import Rail from '../../RangeSlider/Rail';
import Thumb from '../../RangeSlider/Thumb';
import {SortingVisualizerState} from '../../../redux/sortingVisualizer/types';
import {actionCreators, AppState} from '../../../redux';
import {useSelector, useDispatch} from 'react-redux';
import Notch from '../../RangeSlider/Notch';
import {bindActionCreators} from 'redux';

const SpeedRange = (): JSX.Element => {
  const dispatch = useDispatch();
  const min: SortingVisualizerState['speed'] = 0;
  const max: SortingVisualizerState['speed'] = 1000;
  const step = 100;
  const {speed} = useSelector((state: AppState) => state.sortingVisualizer);
  const {changeSortingSpeed} = bindActionCreators(actionCreators, dispatch);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Speed: </Text>
          <Text style={styles.speedText}>{speed}ms</Text>
        </View>
        <View style={styles.rangeContainer}>
          <Text style={styles.minText}>{min}ms</Text>
          <RangeSlider
            min={min}
            max={max}
            step={step}
            disableRange
            floatingLabel={true}
            low={speed}
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
                <Notch payload={speed} />
              ),
              [speed],
            )}
            onValueChanged={low => {
              const sortingSpeed = low as SortingVisualizerState['speed'];
              if (sortingSpeed !== speed) {
                changeSortingSpeed(sortingSpeed);
              }
            }}
          />
          <Text style={styles.maxText}>{max}ms</Text>
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

export default SpeedRange;
