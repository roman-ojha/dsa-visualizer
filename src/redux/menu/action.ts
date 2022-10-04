import {MenuAction, MenuActionTypes, MenuState} from './types';
import {Dispatch} from 'react';

export const changeVisibility = (isVisible: MenuState['isVisible']) => {
  return (dispatch: Dispatch<MenuAction>) => {
    dispatch({
      type: MenuActionTypes.CHANGE_VISIBILITY,
      isVisible,
    });
  };
};

export const changeMenuSize = (size: MenuState['menuSize']) => {
  return (dispatch: Dispatch<MenuAction>) => {
    dispatch({
      type: MenuActionTypes.CHANGE_MENU_SIZE,
      size,
    });
  };
};
