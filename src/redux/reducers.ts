import {combineReducers} from 'redux';
import sortingVisualizer from './sortingVisualizer/reducer';
import menuReducer from './menu/reducer';

const reducer = combineReducers({
  sortingVisualizer,
  menuReducer,
});

export default reducer;
