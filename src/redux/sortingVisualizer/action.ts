import {
  SortingVisualizerState,
  SortingVisualizerActionTypes,
  SortingVisualizerAction,
} from './types';
import {Dispatch} from 'react';

export const generateRandomSortingArray = () => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY,
    });
  };
};

export const sortArray = () => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.SORT_ARRAY,
    });
  };
};

export const changeSortingSpeed = (data: SortingVisualizerState['speed']) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.CHANGE_SORTING_SPEED,
      payload: data,
    });
  };
};

export const changeSortingArraySize = (
  data: SortingVisualizerState['arraySize'],
) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.CHANGE_SORTING_ARRAY_SIZE,
      payload: data,
    });
  };
};

export const changeSortingAlgorithm = (
  data: SortingVisualizerState['sortingAlgorithm'],
) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.CHANGE_SORTING_ALGORITHM,
      payload: data,
    });
  };
};
