import {
  SortingVisualizerState,
  SortingVisualizerAction,
  SortingVisualizerActionTypes,
  Array,
} from './types';
import generateRandomArray from '../../utils/generateRandomArray';

const initialSortingArraySize = 20;

const initialState: SortingVisualizerState = {
  title: 'Bubble Sort',
  arraySize: initialSortingArraySize,
  array: generateRandomArray(initialSortingArraySize),
  sortingAlgorithm: 'bubble',
  speed: 200,
  status: 'init||finished',
  order: 'ascending',
};

const sortingVisualizer = (
  state: SortingVisualizerState = initialState,
  action: SortingVisualizerAction,
): SortingVisualizerState => {
  switch (action.type) {
    case SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY:
      return {
        ...state,
        array: generateRandomArray(state.arraySize),
      };
    case SortingVisualizerActionTypes.UPDATE_ARRAY:
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
      return {
        ...state,
        arraySize: action.payload,
        array: generateRandomArray(action.payload),
      };
    case SortingVisualizerActionTypes.CHANGE_SORTING_ALGORITHM:
      switch (action.payload) {
        case 'bubble':
          return {
            ...state,
            title: 'Bubble Sort',
            sortingAlgorithm: action.payload,
            array: generateRandomArray(state.arraySize),
          };
        case 'insertion':
          return {
            ...state,
            title: 'Insertion Sort',
            sortingAlgorithm: action.payload,
            array: generateRandomArray(state.arraySize),
          };
        case 'merge':
          return {
            ...state,
            title: 'Merge Sort',
            sortingAlgorithm: action.payload,
            array: generateRandomArray(state.arraySize),
          };
        case 'quick':
          return {
            ...state,
            title: 'Quick Sort',
            sortingAlgorithm: action.payload,
            array: generateRandomArray(state.arraySize),
          };
        case 'selection':
          return {
            ...state,
            title: 'Selection Sort',
            sortingAlgorithm: action.payload,
            array: generateRandomArray(state.arraySize),
          };
        default:
          return state;
      }
    case SortingVisualizerActionTypes.CHANGE_SORTING_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SortingVisualizerActionTypes.CHANGE_SORTING_ORDER:
      return {
        ...state,
        order: action.order,
        array: state.array.map(function (key: Array): Array {
          return {
            item: key.item,
            sorted: false,
            comparing: false,
          };
        }),
      };
    default:
      return state;
  }
};

export default sortingVisualizer;
