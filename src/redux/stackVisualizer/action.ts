import {
  StackVisualizerAction,
  StackVisualizerActionTypes,
  // StackVisualizerState,
} from './types';
import {Dispatch} from 'react';

export const pushIntoStack = (data: number) => {
  return (dispatch: Dispatch<StackVisualizerAction>) => {
    dispatch({
      type: StackVisualizerActionTypes.PUSH_INTO_STACK,
      data,
    });
  };
};

export const pushRandomItemIntoStack = () => {
  return (dispatch: Dispatch<StackVisualizerAction>) => {
    dispatch({
      type: StackVisualizerActionTypes.PUSH_RANDOM_ITEM_INTO_STACK,
    });
  };
};

export const popFromStack = () => {
  return (dispatch: Dispatch<StackVisualizerAction>) => {
    dispatch({
      type: StackVisualizerActionTypes.POP_FROM_STACK,
    });
  };
};
