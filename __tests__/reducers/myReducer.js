import myReducer from '../../src/reducers/myReducer';
import { INPUT_VALUE } from '../../src/actions/types';

describe('Reducers', () => {
  it('initial state is correct', () => {
    const action = { type: INPUT_VALUE, payload: 'dummyVal' };
    const INITIAL_STATE = {
      inputValueFromReducer: 'dummyVal',
    };
    expect(myReducer(undefined, action)).toEqual(INITIAL_STATE);
  });
});
