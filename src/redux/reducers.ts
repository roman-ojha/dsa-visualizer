import {combineReducers} from 'redux';
import menuReducer from './menu/reducer';
import sortingVisualizer from './sortingVisualizer/reducer';
import stackVisualizer from './stackVisualizer/reducer';

const reducer = combineReducers({
  sortingVisualizer,
  menuReducer,
  stackVisualizer,
});

export default reducer;
