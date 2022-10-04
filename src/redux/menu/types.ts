export interface MenuState {
  isVisible: boolean;
  finishedCloseAnimation: boolean;
  menuSize: number;
}

export enum MenuActionTypes {
  CHANGE_VISIBILITY = 'CHANGE_VISIBILITY',
  CHANGE_MENU_SIZE = 'CHANGE_MENU_SIZE',
}

export interface ChangeVisibility {
  type: MenuActionTypes.CHANGE_VISIBILITY;
  isVisible: boolean;
}

export interface ChangeMenuSize {
  type: MenuActionTypes.CHANGE_MENU_SIZE;
  size: number;
}

export type MenuAction = ChangeVisibility | ChangeMenuSize;
