import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators, AppState} from '../../redux';
import {stylesConst} from '../../constants';
import sleep from '../../utils/sleep';

const SortButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {sortingAlgorithm, arraySize, array, speed, status} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {sortArray, changeSortingStatus} = bindActionCreators(
    actionCreators,
    dispatch,
  );
  const sort = async () => {
    // setPause
    if (sortingAlgorithm === 'bubble') {
      const updatedArray = array;
      let previouslySortingIndexFirst: number | null = null;
      let previouslySortingIndexSecond: number | null = null;
      for (let i = arraySize; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
          if (
            previouslySortingIndexFirst !== null &&
            previouslySortingIndexSecond !== null
          ) {
            updatedArray[previouslySortingIndexFirst].sorting = false;
            updatedArray[previouslySortingIndexSecond].sorting = false;
          }
          if (updatedArray[j].item > updatedArray[j + 1].item) {
            let temp = updatedArray[j + 1];
            updatedArray[j + 1] = updatedArray[j];
            updatedArray[j] = temp;
          }
          // set sorting to true & false according to situation
          updatedArray[j].sorting = true;
          updatedArray[j + 1].sorting = true;
          previouslySortingIndexFirst = j;
          previouslySortingIndexSecond = j + 1;
          sortArray(updatedArray);
          await sleep(speed);
        }
        if (
          previouslySortingIndexFirst !== null &&
          previouslySortingIndexSecond !== null
        ) {
          updatedArray[previouslySortingIndexFirst].sorting = false;
          updatedArray[previouslySortingIndexSecond].sorting = false;
        }
        updatedArray[i - 1].sorted = true;
        sortArray(updatedArray);
        if (i === 1) {
          changeSortingStatus('init||finished');
        }
      }
      // const iLoop = (i: number) => {
      //   let j = 0;
      //   let previouslySortingIndexFirst: number | null = null;
      //   let previouslySortingIndexSecond: number | null = null;
      //   const jLoop = setInterval(() => {
      //     const updatedArray = array;
      //     if (j < i - 1) {
      //       if (
      //         previouslySortingIndexFirst !== null &&
      //         previouslySortingIndexSecond !== null
      //       ) {
      //         updatedArray[previouslySortingIndexFirst].sorting = false;
      //         updatedArray[previouslySortingIndexSecond].sorting = false;
      //       }
      //       if (updatedArray[j].item > updatedArray[j + 1].item) {
      //         let temp = updatedArray[j + 1];
      //         updatedArray[j + 1] = updatedArray[j];
      //         updatedArray[j] = temp;

      //         // set sorting to true & false according to situation
      //         updatedArray[j].sorting = true;
      //         updatedArray[j + 1].sorting = true;
      //         previouslySortingIndexFirst = j;
      //         previouslySortingIndexSecond = j + 1;
      //       }
      //       // update array in every interval
      //       sortArray(updatedArray);
      //     } else {
      //       clearInterval(jLoop);
      //       if (i > 0) {
      //         if (
      //           previouslySortingIndexFirst !== null &&
      //           previouslySortingIndexSecond !== null
      //         ) {
      //           updatedArray[previouslySortingIndexFirst].sorting = false;
      //           updatedArray[previouslySortingIndexSecond].sorting = false;
      //         }
      //         updatedArray[i - 1].sorted = true;
      //         sortArray(updatedArray);
      //         iLoop(i - 1);
      //       }
      //     }
      //     j++;
      //   }, -1000);
      // };
      // iLoop(arraySize);
    }
  };

  return (
    <>
      <TouchableOpacity
        style={[
          styles.sortButton,
          // status === 'started&&sorting'
          //   ? {backgroundColor: stylesConst.colors.button.after}
          //   : {backgroundColor: stylesConst.colors.button.before},
        ]}
        disabled={status === 'started&&sorting' ? true : false}
        onPress={() => {
          if (status === 'init||finished') {
            changeSortingStatus('started&&sorting');
            sort();
          }
        }}>
        <Text style={styles.button}>
          {status === 'started&&sorting'
            ? 'Sorting'
            : status === 'init||finished'
            ? 'Sort'
            : ''}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  sortButton: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  button: {
    color: stylesConst.colors.font[0],
  },
});

export default SortButton;
