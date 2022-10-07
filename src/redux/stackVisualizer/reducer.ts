import generateRandomNumber from '../../utils/generateRandomNumber';
import {
  StackVisualizerAction,
  StackVisualizerActionTypes,
  StackVisualizerState,
} from './types';
import {pop, push, pushRandomItemIntoStack} from '../../utils/stack';

const initialState: StackVisualizerState = {
  stack: [generateRandomNumber(1, 999), generateRandomNumber(20, 100)],
  stackSize: 13,
  top: 1,
  status: '',
};

const stackVisualizer = (
  state: StackVisualizerState = initialState,
  action: StackVisualizerAction,
): StackVisualizerState => {
  switch (action.type) {
    case StackVisualizerActionTypes.PUSH_INTO_STACK:
      return push(state, action.data);
    case StackVisualizerActionTypes.PUSH_RANDOM_ITEM_INTO_STACK:
      return pushRandomItemIntoStack(state);
    case StackVisualizerActionTypes.POP_FROM_STACK:
      return pop(state);
    default:
      return state;
  }
};

export default stackVisualizer;
