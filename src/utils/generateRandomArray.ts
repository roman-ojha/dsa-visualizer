import {Array as SortingVisualizerArray} from '../redux/sortingVisualizer/types';

const randomNumber10To99 = (): number => {
  // generating random from 10 - 99
  return Math.floor(Math.random() * 90) + 10;
};

const generateRandomArray = (length: number): SortingVisualizerArray[] => {
  const array: SortingVisualizerArray[] = [];
  for (let i = 0; i < length; i++) {
    // array.push(randomNumber10To99());
    array.push({
      item: randomNumber10To99(),
      sorted: false,
      comparing: false,
      min: false,
    });
  }
  return array;
};

export default generateRandomArray;
