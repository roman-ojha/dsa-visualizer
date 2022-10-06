import {useSelector} from 'react-redux';
import {AppState} from '../../redux';
import useBubbleSort from './useBubbleSort';
import useSelectionSort from './useSelectionSort';

const useSort = () => {
  const {sortingAlgorithm} = useSelector(
    (state: AppState) => state.sortingVisualizer,
  );
  const bubbleSort = useBubbleSort();
  const selectionSort = useSelectionSort();
  return async (): Promise<void> => {
    if (sortingAlgorithm === 'bubble') {
      bubbleSort();
    } else if (sortingAlgorithm === 'selection') {
      selectionSort();
    }
  };
};

export default useSort;
