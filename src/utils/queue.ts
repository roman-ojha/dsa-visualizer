import {QueueVisualizerState} from '../redux/queueVisualizer/types';
import generateRandomNumber from './generateRandomNumber';

const isEmpty = (state: QueueVisualizerState): boolean => {
  if (state.front === -1 && state.rare === -1) {
    return true;
  } else {
    return false;
  }
};

const isFull = (state: QueueVisualizerState): boolean => {
  if (state.rare === state.size - 1) {
    return true;
  } else {
    return false;
  }
};

export const enqueue = (
  state: QueueVisualizerState,
  data: number | null,
): QueueVisualizerState => {
  if (!data) {
    return {
      ...state,
      status: 'First input value in input field',
    };
  } else if (data > 99 || data < -99) {
    // can only insert double digit number
    return {
      ...state,
      status: 'Please enqueue upto 2 digit number',
    };
  }
  const queue = state.queue;
  if (isEmpty(state)) {
    queue[state.rare + 1] = data;
    return {
      ...state,
      front: 0,
      rare: 0,
      status: `Enqueued ${data}`,
      queue,
    };
  } else if (isFull(state)) {
    return {
      ...state,
      status: 'Queue is full',
    };
  } else {
    queue[state.rare + 1] = data;
    return {
      ...state,
      rare: ++state.rare,
      status: `Enqueued ${data}`,
      queue,
    };
  }
};

export const dequeue = (state: QueueVisualizerState): QueueVisualizerState => {
  if (isEmpty(state)) {
    return {
      ...state,
      status: 'Queue is Empty',
    };
  } else {
    const queue = state.queue;
    const data = state.queue[state.front];
    queue[state.front] = null;
    if (state.front === state.rare) {
      return {
        ...state,
        status: `dequeued ${data}`,
        front: -1,
        rare: -1,
        queue,
      };
    }
    return {
      ...state,
      front: ++state.front,
      status: `dequeued ${data}`,
      queue,
    };
  }
};

export const enqueueRandomValue = (
  state: QueueVisualizerState,
): QueueVisualizerState => {
  const data = generateRandomNumber(0, 99);
  const queue = state.queue;
  if (isEmpty(state)) {
    queue[state.rare + 1] = data;
    return {
      ...state,
      front: 0,
      rare: 0,
      status: `Enqueued ${data}`,
      queue,
    };
  } else if (isFull(state)) {
    return {
      ...state,
      status: 'Queue is full',
    };
  } else {
    queue[state.rare + 1] = data;
    return {
      ...state,
      rare: ++state.rare,
      status: `Enqueued ${data}`,
      queue,
    };
  }
};
