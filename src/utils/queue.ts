import {QueueVisualizerState} from '../redux/queueVisualizer/types';

const isEmpty = (state: QueueVisualizerState): boolean => {
  if (state.front - 1 === state.rare) {
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
  data: number,
): QueueVisualizerState => {
  if (!data) {
    return {
      ...state,
      status: 'First input value in input field',
    };
  } else if (data > 99 || data < -99) {
    return {
      ...state,
      status: 'Please enqueue upto 2 digit number',
    };
  }
  if (isEmpty(state)) {
    return {
      ...state,
      front: 0,
      rare: 0,
      status: `Enqueued ${data}`,
      queue: [...state.queue, data],
    };
  } else if (isFull(state)) {
    return {
      ...state,
      status: 'Queue is full',
    };
  } else {
    return {
      ...state,
      rare: ++state.rare,
      status: `Enqueued ${data}`,
      queue: [...state.queue, data],
    };
  }
};

export const dequeue = (state: QueueVisualizerState): QueueVisualizerState => {
  if (isEmpty(state)) {
    return {
      ...state,
      status: 'Queue is Empty',
    };
  } else if (isFull(state)) {
    return {
      ...state,
      status: 'Queue is Full',
    };
  } else {
    const queue = state.queue;
    queue[state.front] = null;
    return {
      ...state,
      front: ++state.front,
      status: `dequeued ${state.queue[state.front]}`,
      queue,
    };
  }
};
