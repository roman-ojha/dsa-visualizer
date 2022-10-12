export interface QueueVisualizerState {
  size: number;
  front: number;
  rare: number;
  queue: number[];
  status: string | null;
}

export enum QueueVisualizerActionTypes {
  ENQUEUE_Into_QUEUE = 'ENQUEUE_Into_QUEUE',
  DEQUEUE_FROM_QUEUE = 'DEQUEUE_FROM_QUEUE',
  ENQUEUE_RANDOM_VALUE_INTO_QUEUE = 'ENQUEUE_RANDOM_VALUE_INTO_QUEUE',
}

export interface EnqueueIntoQueue {
  type: QueueVisualizerActionTypes.ENQUEUE_Into_QUEUE;
  data: number;
}

export interface DequeueFromQueue {
  type: QueueVisualizerActionTypes.DEQUEUE_FROM_QUEUE;
}

export interface EnqueueRandomValueIntoQueue {
  type: QueueVisualizerActionTypes.ENQUEUE_RANDOM_VALUE_INTO_QUEUE;
}

export type QueueVisualizerAction =
  | EnqueueIntoQueue
  | DequeueFromQueue
  | EnqueueRandomValueIntoQueue;
