import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreators, AppState} from '../../redux';
import {stylesConst} from '../../constants';

const SortButton = (): JSX.Element => {
  const dispatch = useDispatch();
  const {sortingAlgorithm, arraySize, array} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {sortArray} = bindActionCreators(actionCreators, dispatch);
  const sort = () => {
    if (sortingAlgorithm === 'bubble') {
      //   for (let i = array.length; i >= 0; i--) {
      //     for (let j = 0; j < i - 1; j++) {
      //       if (array[j].item > array[j + 1].item) {
      //         let temp = array[j + 1];
      //         array[j + 1] = array[j];
      //         array[j] = temp;
      //       }
      //     }
      //   }
      const iLoop = (i: number) => {
        let j = 0;
        let previouslySortingIndexFirst: number | null = null;
        let previouslySortingIndexSecond: number | null = null;
        const jLoop = setInterval(() => {
          const updatedArray = array;
          if (j < i - 1) {
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

              // set sorting to true & false according to situation
              updatedArray[j].sorting = true;
              updatedArray[j + 1].sorting = true;
              previouslySortingIndexFirst = j;
              previouslySortingIndexSecond = j + 1;
            }
            // update array in every interval
            sortArray(updatedArray);
          } else {
            clearInterval(jLoop);
            if (i > 0) {
              if (
                previouslySortingIndexFirst !== null &&
                previouslySortingIndexSecond !== null
              ) {
                updatedArray[previouslySortingIndexFirst].sorting = false;
                updatedArray[previouslySortingIndexSecond].sorting = false;
              }
              updatedArray[i - 1].sorted = true;
              sortArray(updatedArray);
              iLoop(i - 1);
            }
          }
          j++;
        }, 50);
      };
      iLoop(arraySize);
    }
  };
  return (
    <>
      <TouchableOpacity style={styles.sortButton} onPress={sort}>
        <Text style={styles.button}>Sort</Text>
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
    width: 100,
  },
  button: {
    color: stylesConst.colors.font[0],
  },
});

export default SortButton;
