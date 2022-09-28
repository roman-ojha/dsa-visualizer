export type SortingAlgorithmsType = 'Bubble-Sort';

export interface State {
  arraySize: number;
  sortingAlgorithm: SortingAlgorithmsType;
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
