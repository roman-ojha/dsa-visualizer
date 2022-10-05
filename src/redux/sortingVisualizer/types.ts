export interface Array {
  item: number;
  sorted: boolean;
  // sorted: if particular item get sorted
  sorting: boolean;
  // sorting: if particular item is now being evaluating and sorting
}

export const maximumSortingArraySize: number = 80;

export interface SortingVisualizerState {
  title: 'Bubble Sort' | 'Insertion Sort' | 'Quick Sort' | 'Merge Sort';
  arraySize: number;
  sortingAlgorithm: 'bubble' | 'insertion' | 'quick' | 'merge';
  array: Array[];
  speed: 0 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;
  status: 'started&&sorting' | 'started&&pause' | 'init||finished';
}

export enum SortingVisualizerActionTypes {
  GENERATE_RANDOM_SORTING_ARRAY = 'GENERATE_RANDOM_SORTING_ARRAY',
  SORT_ARRAY = 'SORT_ARRAY',
  CHANGE_SORTING_SPEED = 'CHANGE_SORTING_SPEED',
  CHANGE_SORTING_ARRAY_SIZE = 'CHANGE_SORTING_ARRAY_SIZE',
  CHANGE_SORTING_ALGORITHM = 'CHANGE_SORTING_ALGORITHM',
  CHANGE_SORTING_STATUS = 'CHANGE_SORTING_STATUS',
}

export interface GenerateRandomSortingArray {
  type: SortingVisualizerActionTypes.GENERATE_RANDOM_SORTING_ARRAY;
}

export interface SortArray {
  type: SortingVisualizerActionTypes.SORT_ARRAY;
  updatedArray: Array[];
}

export interface ChangeSortingSpeed {
  type: SortingVisualizerActionTypes.CHANGE_SORTING_SPEED;
  payload: SortingVisualizerState['speed'];
}

export interface ChangeSortingArraySize {
  type: SortingVisualizerActionTypes.CHANGE_SORTING_ARRAY_SIZE;
  payload: SortingVisualizerState['arraySize'];
}

export interface ChangeSortingAlgorithm {
  type: SortingVisualizerActionTypes.CHANGE_SORTING_ALGORITHM;
  payload: SortingVisualizerState['sortingAlgorithm'];
}

export interface ChangeSortingStatus {
  type: SortingVisualizerActionTypes.CHANGE_SORTING_STATUS;
  status: SortingVisualizerState['status'];
}

export type SortingVisualizerAction =
  | GenerateRandomSortingArray
  | SortArray
  | ChangeSortingSpeed
  | ChangeSortingArraySize
  | ChangeSortingAlgorithm
  | ChangeSortingStatus;
