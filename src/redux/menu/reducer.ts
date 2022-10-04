import {MenuAction, MenuActionTypes, MenuState} from './types';

const initialState: MenuState = {
  isVisible: false,
  finishedCloseAnimation: true,
  menuSize: 0,
};

const menuReducer = (state: MenuState = initialState, action: MenuAction) => {
  switch (action.type) {
    case MenuActionTypes.CHANGE_VISIBILITY:
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case MenuActionTypes.CHANGE_MENU_SIZE:
      return {
        ...state,
        menuSize: action.size,
      };
    default:
      return state;
  }
};

export default menuReducer;
