import { INPUT_VALUE } from '../actions/types';

const INITIAL_STATE = {
  inputValueFromReducer: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INPUT_VALUE:
    return { ...state, inputValueFromReducer: action.payload };
  default:
    return state;
  }
};
