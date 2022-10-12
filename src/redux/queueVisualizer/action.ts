import {QueueVisualizerActionTypes, QueueVisualizerAction} from './types';
import {Dispatch} from 'react';

export const enqueueIntoQueue = (data: number) => {
  return (dispatch: Dispatch<QueueVisualizerAction>) => {
    dispatch({
      type: QueueVisualizerActionTypes.ENQUEUE_Into_QUEUE,
      data,
    });
  };
};

export const dequeueFromQueue = () => {
  return (dispatch: Dispatch<QueueVisualizerAction>) => {
    dispatch({
      type: QueueVisualizerActionTypes.DEQUEUE_FROM_QUEUE,
    });
  };
};

export const enqueueRandomValueIntoQueue = () => {
  return (dispatch: Dispatch<QueueVisualizerAction>) => {
    dispatch({
      type: QueueVisualizerActionTypes.ENQUEUE_RANDOM_VALUE_INTO_QUEUE,
    });
  };
};
