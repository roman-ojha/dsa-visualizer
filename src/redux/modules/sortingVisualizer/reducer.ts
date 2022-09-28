import {State, Action, ActionTypes} from './types';
import generateRandomArray from '../../../utils/generateRandomArray';

const initialState: State = {
  arraySize: 30,
  array: generateRandomArray(30),
  sortingAlgorithm: 'bubble',
  speed: 50,
};

const sortingVisualizerReducer = (
  state: State = initialState,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.GENERATE_RANDOM_SORTING_ARRAY:
      return state;
    case ActionTypes.SORT_ARRAY:
      return state;
    case ActionTypes.CHANGE_SORTING_SPEED:
      return state;
    case ActionTypes.CHANGE_SORTING_ARRAY_SIZE:
      return state;
    case ActionTypes.CHANGE_SORTING_ALGORITHM:
      return state;
    default:
      return state;
  }
};

export default sortingVisualizerReducer;
