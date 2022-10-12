import {combineReducers} from 'redux';
import menuReducer from './menu/reducer';
import sortingVisualizer from './sortingVisualizer/reducer';
import stackVisualizer from './stackVisualizer/reducer';
import queueVisualizer from './queueVisualizer/reducer';
import inputValueReducer from './shared/inputValue';

const reducer = combineReducers({
  sortingVisualizer,
  menuReducer,
  stackVisualizer,
  queueVisualizer,
  inputValueReducer,
});

export default reducer;
