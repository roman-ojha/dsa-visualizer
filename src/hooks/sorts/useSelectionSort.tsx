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
    } else {
    }
  };
};

export default useSelectionSort;
