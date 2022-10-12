import generateRandomNumber from '../../utils/generateRandomNumber';
import {
  QueueVisualizerAction,
  QueueVisualizerActionTypes,
  QueueVisualizerState,
} from './types';

const initialState: QueueVisualizerState = {
  queue: [generateRandomNumber(1, 10), generateRandomNumber(1, 10)],
  size: 13,
  front: 1,
  rare: 2,
  status: '',
};

const stackVisualizer = (
  state: QueueVisualizerState = initialState,
  action: QueueVisualizerAction,
): QueueVisualizerState => {
  switch (action.type) {
    case QueueVisualizerActionTypes.ENQUEUE_Into_QUEUE:
      return state;
    case QueueVisualizerActionTypes.DEQUEUE_FROM_QUEUE:
      return state;
    case QueueVisualizerActionTypes.ENQUEUE_RANDOM_VALUE_INTO_QUEUE:
      return state;
    default:
      return state;
  }
};

export default stackVisualizer;
