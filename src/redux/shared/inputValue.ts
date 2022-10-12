import {Dispatch} from 'react';
// types
type inputValueState = string;

enum InputValueActionTypes {
  CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE',
}

interface ChangeInputValue {
  type: InputValueActionTypes.CHANGE_INPUT_VALUE;
  newValue: inputValueState;
}

type InputValueAction = ChangeInputValue;

// actions
export const changeInputValue = (newValue: inputValueState) => {
  return (dispatch: Dispatch<InputValueAction>) => {
    dispatch({
      type: InputValueActionTypes.CHANGE_INPUT_VALUE,
      newValue,
    });
  };
};

// reducer
const initialState: inputValueState = '';
const inputValueReducer = (
  state: inputValueState = initialState,
  action: InputValueAction,
): inputValueState => {
  switch (action.type) {
    case InputValueActionTypes.CHANGE_INPUT_VALUE:
      return action.newValue;
    default:
      return state;
  }
};

export default inputValueReducer;
