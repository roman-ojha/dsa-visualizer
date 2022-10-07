import generateRandomNumber from '../../utils/generateRandomNumber';
import {
  StackVisualizerAction,
  StackVisualizerActionTypes,
  StackVisualizerState,
} from './types';

const initialState: StackVisualizerState = {
  stack: [generateRandomNumber(1, 999), generateRandomNumber(20, 100)],
  stackSize: 13,
  topOfStack: 1,
  status: '',
};

const stackVisualizer = (
  state: StackVisualizerState = initialState,
  action: StackVisualizerAction,
): StackVisualizerState => {
  switch (action.type) {
    case StackVisualizerActionTypes.PUSH_INTO_STACK:
      return state;
    case StackVisualizerActionTypes.PUSH_RANDOM_ITEM_INTO_STACK:
      if (state.topOfStack === state.stackSize - 1) {
        return {
          ...state,
          status: 'stack overflow',
        };
      } else {
        // const newStack = state.stack;
        // newStack.push(generateRandomNumber(1, 999));
        return {
          ...state,
          stack: [...state.stack, generateRandomNumber(1, 999)],
          topOfStack: ++state.topOfStack,
        };
      }
    case StackVisualizerActionTypes.POP_FROM_STACK:
      if (state.topOfStack === -1) {
        return {
          ...state,
          status: 'stack underflow',
        };
      } else {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

export default stackVisualizer;
