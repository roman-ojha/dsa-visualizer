export interface StackVisualizerState {
  stackSize: number;
  top: number;
  stack: number[];
  status: string | null;
}

export enum StackVisualizerActionTypes {
  PUSH_INTO_STACK = 'PUSH_INTO_STACK',
  PUSH_RANDOM_ITEM_INTO_STACK = 'PUSH_RANDOM_ITEM_INTO_STACK',
  POP_FROM_STACK = 'POP_FROM_STACK',
}

export interface PushIntoStack {
  type: StackVisualizerActionTypes.PUSH_INTO_STACK;
  data: number;
}

export interface PushRandomItemIntoStack {
  type: StackVisualizerActionTypes.PUSH_RANDOM_ITEM_INTO_STACK;
}

export interface PopFromStack {
  type: StackVisualizerActionTypes.POP_FROM_STACK;
}

export type StackVisualizerAction =
  | PushIntoStack
  | PopFromStack
  | PushRandomItemIntoStack;
