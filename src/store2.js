import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const initialState = {
  input: '',
  prevUser: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'input_change':
      return { input: action.input, prevUser: state.prevUser };
    case 'set_prev':
      return { input: action.prevUser.name, prevUser: action.prevUser };
    default:
      return state;
  }
};

const store2 = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store2;