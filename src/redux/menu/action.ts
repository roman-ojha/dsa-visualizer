import {MenuAction, MenuActionTypes, MenuState} from './types';
import {Dispatch} from 'react';

export const menuChangeVisibility = (isVisible: MenuState['isVisible']) => {
  return (dispatch: Dispatch<MenuAction>) => {
    dispatch({
      type: MenuActionTypes.CHANGE_VISIBILITY,
      isVisible,
    });
  };
};

export const menuChangeMenuSize = (size: MenuState['menuSize']) => {
  return (dispatch: Dispatch<MenuAction>) => {
    dispatch({
      type: MenuActionTypes.CHANGE_MENU_SIZE,
      size,
    });
  };
};
