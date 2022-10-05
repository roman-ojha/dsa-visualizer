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
): SortingVisualizerState => {
  switch (action.type) {
    case SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY:
      return {
        ...state,
        array: generateRandomArray(30),
      };
    case SortingVisualizerActionTypes.SORT_ARRAY:
      return {
        ...state,
        array: action.updatedArray,
      };
    case SortingVisualizerActionTypes.CHANGE_SORTING_SPEED:
      return state;
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
