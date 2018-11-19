import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import Home from '../../../src/components/Home';

configure({ adapter: new Adapter() });

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('Home', () => {
  it('should load without crashing', () => {
    const store = mockStore({ myReducer: { inputValueFromReducer: '' } });
    const wrapper = mount(<Home store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
