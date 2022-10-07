import {StackVisualizerState} from '../redux/stackVisualizer/types';
import generateRandomNumber from './generateRandomNumber';

export const isFull = (state: StackVisualizerState): boolean => {
  if (state.topOfStack === state.stackSize - 1) {
    return true;
  }
  return false;
};

export const isEmpty = (state: StackVisualizerState): boolean => {
  if (state.topOfStack === -1) {
    return true;
  }
  return false;
};

export const push = (
  state: StackVisualizerState,
  data: StackVisualizerState['stack'][0],
): StackVisualizerState => {
  if (isFull(state)) {
    return {
      ...state,
      status: 'stack overflow',
    };
  }
  return {
    ...state,
    stack: [...state.stack, data],
    status: `pushed ${data}`,
  };
};

export const pushRandomItemIntoStack = (
  state: StackVisualizerState,
): StackVisualizerState => {
  if (isFull(state)) {
    return {
      ...state,
      status: 'stack overflow',
    };
  }
  const data = generateRandomNumber(1, 999);
  return {
    ...state,
    stack: [...state.stack, data],
    status: `pushed ${data}`,
  };
};

export const pop = (state: StackVisualizerState): StackVisualizerState => {
  if (isEmpty(state)) {
    return {
      ...state,
      status: 'stack underflow',
    };
  }
  const data = state.stack.pop();
  return {
    ...state,
    stack: state.stack,
    status: `popped ${data}`,
  };
};
