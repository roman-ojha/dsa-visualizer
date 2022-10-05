import {
  SortingVisualizerState,
  SortingVisualizerAction,
  SortingVisualizerActionTypes,
  maximumSortingArraySize,
} from './types';
import generateRandomArray from '../../utils/generateRandomArray';

const initialState: SortingVisualizerState = {
  title: 'Bubble Sort',
  arraySize: maximumSortingArraySize,
  array: generateRandomArray(maximumSortingArraySize),
  sortingAlgorithm: 'bubble',
  speed: 50,
};

const sortingVisualizer = (
  state: SortingVisualizerState = initialState,
  action: SortingVisualizerAction,
): SortingVisualizerState => {
  switch (action.type) {
    case SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY:
      return {
        ...state,
        array: generateRandomArray(maximumSortingArraySize),
      };
    case SortingVisualizerActionTypes.SORT_ARRAY:
      return {
        ...state,
        array: action.updatedArray,
      };
    case SortingVisualizerActionTypes.CHANGE_SORTING_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    case SortingVisualizerActionTypes.CHANGE_SORTING_ARRAY_SIZE:
      return state;
    case SortingVisualizerActionTypes.CHANGE_SORTING_ALGORITHM:
      switch (action.payload) {
        case 'bubble':
          return {
            ...state,
            title: 'Bubble Sort',
            sortingAlgorithm: action.payload,
          };
        case 'insertion':
          return {
            ...state,
            title: 'Insertion Sort',
            sortingAlgorithm: action.payload,
          };
        case 'merge':
          return {
            ...state,
            title: 'Merge Sort',
            sortingAlgorithm: action.payload,
          };
        case 'quick':
          return {
            ...state,
            title: 'Quick Sort',
            sortingAlgorithm: action.payload,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default sortingVisualizer;
