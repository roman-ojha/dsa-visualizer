export interface StackVisualizerState {
  stackSize: number;
  topOfStack: number;
  stack: number[];
}

export enum StackVisualizerActionTypes {
  PUSH_INTO_STACK = 'PUSH_INTO_STACK',
  POP_FROM_STACK = 'POP_FROM_STACK',
}

export interface PushIntoStack {
  type: StackVisualizerActionTypes.PUSH_INTO_STACK;
  data: number;
}

export interface PopFromStack {
  type: StackVisualizerActionTypes.POP_FROM_STACK;
}

export type StackVisualizerAction = PushIntoStack | PopFromStack;
