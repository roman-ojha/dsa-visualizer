import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppState, actionCreators} from '../../redux';
import sleep from '../../utils/sleep';

const useBubbleSort = () => {
  const dispatch = useDispatch();
  const {arraySize, array, speed, order} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {sortArray, changeSortingStatus} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return async (): Promise<void> => {
    if (order === 'ascending') {
      const updatedArray = array;
      let previouslySortingIndexFirst: number | null = null;
      let previouslySortingIndexSecond: number | null = null;
      for (let i = arraySize; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
          // if it is sorted already then no need to sort
          if (updatedArray[j].sorted) {
            break;
          }
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
    } else {
      const updatedArray = array;
      let previouslySortingIndexFirst: number | null = null;
      let previouslySortingIndexSecond: number | null = null;
      for (let i = 0; i < arraySize; i++) {
        for (let j = arraySize - 1; j > i; j--) {
          if (
            previouslySortingIndexFirst !== null &&
            previouslySortingIndexSecond !== null
          ) {
            updatedArray[previouslySortingIndexFirst].sorting = false;
            updatedArray[previouslySortingIndexSecond].sorting = false;
          }
          if (updatedArray[j].item > updatedArray[j - 1].item) {
            let temp = updatedArray[j - 1];
            updatedArray[j - 1] = updatedArray[j];
            updatedArray[j] = temp;
          }
          // set sorting to true & false according to situation
          updatedArray[j].sorting = true;
          updatedArray[j - 1].sorting = true;
          previouslySortingIndexFirst = j;
          previouslySortingIndexSecond = j - 1;
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
        updatedArray[i].sorted = true;
        sortArray(updatedArray);
        if (i === arraySize - 1) {
          changeSortingStatus('init||finished');
        }
      }
    }
  };
};

export default useBubbleSort;
