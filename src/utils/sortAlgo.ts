import {Array} from '../redux/sortingVisualizer/types';

const bubbleSort = (array: Array[]): Array[] => {
  for (let i = array.length; i >= 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j].item > array[j + 1].item) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

export {bubbleSort};
