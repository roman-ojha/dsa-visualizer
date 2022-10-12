import {
  QueueVisualizerAction,
  QueueVisualizerActionTypes,
  QueueVisualizerState,
} from './types';
import {enqueue, dequeue, enqueueRandomValue} from '../../utils/queue';

const initialState: QueueVisualizerState = {
  queue: [
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
    null,
    null,
  ],
  size: 18,
  front: -1,
  rare: -1,
  status: '',
};

const queueVisualizer = (
  state: QueueVisualizerState = initialState,
  action: QueueVisualizerAction,
): QueueVisualizerState => {
  switch (action.type) {
    case QueueVisualizerActionTypes.ENQUEUE_Into_QUEUE:
      return enqueue(state, action.data);
    case QueueVisualizerActionTypes.DEQUEUE_FROM_QUEUE:
      return dequeue(state);
    case QueueVisualizerActionTypes.ENQUEUE_RANDOM_VALUE_INTO_QUEUE:
      return enqueueRandomValue(state);
    default:
      return state;
  }
};

export default queueVisualizer;
