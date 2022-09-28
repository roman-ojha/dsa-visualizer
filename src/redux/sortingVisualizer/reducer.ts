import {
  SortingVisualizerState,
  SortingVisualizerAction,
  SortingVisualizerActionTypes,
} from './types';
import generateRandomArray from '../../utils/generateRandomArray';

const initialState: SortingVisualizerState = {
  title: 'Bubble Sort',
  arraySize: 30,
  array: generateRandomArray(30),
  sortingAlgorithm: 'bubble',
  speed: 50,
};

const sortingVisualizer = (
  state: SortingVisualizerState = initialState,
  action: SortingVisualizerAction,
) => {
  switch (action.type) {
    case SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY:
      return {
        ...state,
        array: generateRandomArray(30),
      };
    case SortingVisualizerActionTypes.SORT_ARRAY:
      return state;
    case SortingVisualizerActionTypes.CHANGE_SORTING_SPEED:
      return state;
    case SortingVisualizerActionTypes.CHANGE_SORTING_ARRAY_SIZE:
      return state;
    case SortingVisualizerActionTypes.CHANGE_SORTING_ALGORITHM:
      return state;
    default:
      return state;
  }
};

export default sortingVisualizer;
