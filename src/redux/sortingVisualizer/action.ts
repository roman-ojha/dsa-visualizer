import {State, ActionTypes, Action} from './types';
import {Dispatch} from 'react';

export const generateRandomSortingArray = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.GENERATE_RANDOM_SORTING_ARRAY,
    });
  };
};

export const sortArray = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SORT_ARRAY,
    });
  };
};

export const changeSortingSpeed = (data: State['speed']) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CHANGE_SORTING_SPEED,
      payload: data,
    });
  };
};

export const changeSortingArraySize = (data: State['arraySize']) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CHANGE_SORTING_ARRAY_SIZE,
      payload: data,
    });
  };
};

export const changeSortingAlgorithm = (data: State['sortingAlgorithm']) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.CHANGE_SORTING_ALGORITHM,
      payload: data,
    });
  };
};
