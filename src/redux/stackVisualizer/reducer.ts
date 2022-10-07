import {
  StackVisualizerAction,
  StackVisualizerActionTypes,
  StackVisualizerState,
} from './types';

const initialState: StackVisualizerState = {
  stack: [],
  stackSize: 13,
  topOfStack: -1,
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
      return state;
    case StackVisualizerActionTypes.POP_FROM_STACK:
      return state;
    default:
      return state;
  }
};

export default stackVisualizer;
