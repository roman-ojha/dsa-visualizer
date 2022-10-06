import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {AppState, actionCreators} from '../../redux';
import sleep from '../../utils/sleep';

const useSelectionSort = () => {
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
      const newArray = array;
      let previouslySortingIndexFirst: number | null = null;
      let previouslySortingIndexSecond: number | null = null;
      let min = 0;
      newArray[min].min = true;
      for (let i = 0; i < arraySize; i++) {
        for (let j = i; j < arraySize; j++) {
          if (newArray[min] > newArray[j]) {
            let temp = newArray[min];
            newArray[min] = newArray[j];
            newArray[j] = temp;
          }
        }
      }
    } else {
    }
  };
};

export default useSelectionSort;
