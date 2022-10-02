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
      const array = state.array;
      for (let i = array.length; i >= 0; i--) {
        for (let j = 0; j < i - 1; j++) {
          if (array[j].item > array[j + 1].item) {
            let temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
          }
        }
      }
      return {
        ...state,
        array,
      };
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
