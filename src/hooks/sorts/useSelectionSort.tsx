import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppState, actionCreators} from '../../redux';
import sleep from '../../utils/sleep';

const useSelectionSort = () => {
  const dispatch = useDispatch();
  const {arraySize, array, speed, order} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const {updateArray, changeSortingStatus} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  return async (): Promise<void> => {
    if (order === 'ascending') {
      const newArray = array;
      let previouslyComparedIndex: number | null = null;
      let previousMinimumIndex: number = 0;
      let min;
      for (let i = 0; i < arraySize; i++) {
        // if it is sorted already then no need to sort
        if (newArray[i].sorted) {
          if (i === arraySize - 1) {
            changeSortingStatus('init||finished');
          }
          continue;
        }
        min = i;
        newArray[min].min = true;
        previousMinimumIndex = i;
        updateArray(newArray);
        await sleep(speed);
        for (let j = i + 1; j < arraySize; j++) {
          if (previouslyComparedIndex !== null) {
            newArray[previouslyComparedIndex].comparing = false;
          }
          if (newArray[min].item > newArray[j].item) {
            newArray[previousMinimumIndex].min = false;
            min = j;
          }
          newArray[j].comparing = true;
          newArray[min].min = true;
          previouslyComparedIndex = j;
          previousMinimumIndex = min;
          updateArray(newArray);
          await sleep(speed);
        }
        if (previouslyComparedIndex !== null) {
          newArray[previousMinimumIndex].min = false;
          newArray[previouslyComparedIndex].comparing = false;
        }
        // swap with minimum
        let temp = newArray[min];
        newArray[min] = newArray[i];
        newArray[i] = temp;
        newArray[i].sorted = true;
        updateArray(newArray);
        if (i === arraySize - 1) {
          changeSortingStatus('init||finished');
        }
      }
    } else {
    }
  };
};

export default useSelectionSort;
