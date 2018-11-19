import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import { submitValueAction } from '../../src/actions/myAction';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });

let store;
beforeEach(() => { // Runs before each test in the suite
  store = mockStore();
  store.clearActions();
});

describe('submitValueAction', () => {
  it('dispatch sample action', () => {
    store.dispatch(submitValueAction('testingValue'));
    const expected = [{ payload: 'testingValue', type: 'inputValue' }];
    expect(store.getActions()).toEqual(expected);
  });
});
