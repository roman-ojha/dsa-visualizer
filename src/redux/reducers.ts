import {combineReducers} from 'redux';
import menuReducer from './menu/reducer';
import sortingVisualizer from './sortingVisualizer/reducer';
import stackVisualizer from './stackVisualizer/reducer';
import queueVisualizer from './queueVisualizer/reducer';

const reducer = combineReducers({
  sortingVisualizer,
  menuReducer,
  stackVisualizer,
  queueVisualizer,
});

export default reducer;
