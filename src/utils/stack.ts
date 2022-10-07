import {StackVisualizerState} from '../redux/stackVisualizer/types';

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
