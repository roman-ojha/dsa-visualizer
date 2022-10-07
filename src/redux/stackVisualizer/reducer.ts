import {
  StackVisualizerAction,
  StackVisualizerActionTypes,
  StackVisualizerState,
} from './types';

const initialState: StackVisualizerState = {
  stack: [],
  stackSize: 13,
  topOfStack: -1,
};

const sortingVisualizer = (
  state: StackVisualizerState = initialState,
  action: StackVisualizerAction,
): StackVisualizerState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default sortingVisualizer;
