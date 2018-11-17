import { INPUT_VALUE } from './types';

export const submitValueAction = value => (
  dispatch => dispatch({ type: INPUT_VALUE, payload: value })
);

export const action2 = param => (
  dispatch => dispatch({ type: INPUT_VALUE, payload: param })
);
