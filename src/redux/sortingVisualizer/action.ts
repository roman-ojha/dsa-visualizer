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

export const updateArray = (array: SortingVisualizerState['array']) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.UPDATE_ARRAY,
      updatedArray: array,
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

export const changeSortingStatus = (
  status: SortingVisualizerState['status'],
) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.CHANGE_SORTING_STATUS,
      status: status,
    });
  };
};

export const changeSortingOrder = (order: SortingVisualizerState['order']) => {
  return (dispatch: Dispatch<SortingVisualizerAction>) => {
    dispatch({
      type: SortingVisualizerActionTypes.CHANGE_SORTING_ORDER,
      order,
    });
  };
};
