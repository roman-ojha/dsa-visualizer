export interface State {
  arraySize: number;
  sortingAlgorithm: 'bubble' | 'insertion' | 'quick' | 'merge';
  array: {
    item: number;
    sorted: boolean;
    // sorted: if particular item get sorted
    sorting: boolean;
    // sorting: if particular item is now being evaluating and sorting
  }[];
  speed: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

export enum ActionTypes {
  GENERATE_RANDOM_SORTING_ARRAY = 'GENERATE_RANDOM_SORTING_ARRAY',
  SORT_ARRAY = 'SORT_ARRAY',
  CHANGE_SORTING_SPEED = 'CHANGE_SORTING_SPEED',
  CHANGE_SORTING_ARRAY_SIZE = 'CHANGE_SORTING_ARRAY_SIZE',
  CHANGE_SORTING_ALGORITHM = 'CHANGE_SORTING_ALGORITHM',
}

export interface GenerateRandomSortingArray {
  type: ActionTypes.GENERATE_RANDOM_SORTING_ARRAY;
}

export interface SortArray {
  type: ActionTypes.SORT_ARRAY;
}

export interface ChangeSortingSpeed {
  type: ActionTypes.CHANGE_SORTING_SPEED;
  payload: State['speed'];
}

export interface ChangeSortingArraySize {
  type: ActionTypes.CHANGE_SORTING_ARRAY_SIZE;
  payload: State['arraySize'];
}

export interface ChangeSortingAlgorithm {
  type: ActionTypes.CHANGE_SORTING_ALGORITHM;
  payload: State['sortingAlgorithm'];
}

export type Action =
  | GenerateRandomSortingArray
  | SortArray
  | ChangeSortingSpeed
  | ChangeSortingArraySize
  | ChangeSortingAlgorithm;
