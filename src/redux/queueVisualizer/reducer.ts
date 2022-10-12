import generateRandomNumber from '../../utils/generateRandomNumber';
import {
  QueueVisualizerAction,
  QueueVisualizerActionTypes,
  QueueVisualizerState,
} from './types';

const initialState: QueueVisualizerState = {
  queue: [
    generateRandomNumber(1, 10),
    generateRandomNumber(1, 10),
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ],
  size: 18,
  front: 0,
  rare: 1,
  status: '',
};

const queueVisualizer = (
  state: QueueVisualizerState = initialState,
  action: QueueVisualizerAction,
): QueueVisualizerState => {
  switch (action.type) {
    case QueueVisualizerActionTypes.ENQUEUE_Into_QUEUE:
      // can only insert double digit number
      return state;
    case QueueVisualizerActionTypes.DEQUEUE_FROM_QUEUE:
      return state;
    case QueueVisualizerActionTypes.ENQUEUE_RANDOM_VALUE_INTO_QUEUE:
      return state;
    default:
      return state;
  }
};

export default queueVisualizer;
