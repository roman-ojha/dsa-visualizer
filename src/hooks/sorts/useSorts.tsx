import {useSelector} from 'react-redux';
import {AppState} from '../../redux';
import useBubbleSort from './useBubbleSort';

const useSort = () => {
  const {sortingAlgorithm} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const bubbleSort = useBubbleSort();
  return async (): Promise<void> => {
    if (sortingAlgorithm === 'bubble') {
      bubbleSort();
    }
  };
};

export default useSort;
