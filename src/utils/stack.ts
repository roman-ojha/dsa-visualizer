import {StackVisualizerState} from '../redux/stackVisualizer/types';
import generateRandomNumber from './generateRandomNumber';

export const isFull = (state: StackVisualizerState): boolean => {
  if (state.top === state.stackSize - 1) {
    return true;
  }
  return false;
};

export const isEmpty = (state: StackVisualizerState): boolean => {
  if (state.top === -1) {
    return true;
  }
  return false;
};

export const topOfStack = (
  state: StackVisualizerState,
): StackVisualizerState['stack'][0] => {
  return state.stack[state.top];
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
    top: ++state.top,
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
    top: ++state.top,
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
    top: --state.top,
    status: `popped ${data}`,
  };
};
