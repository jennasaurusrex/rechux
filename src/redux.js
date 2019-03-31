import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_JOKES':
      return { ...state, jokes: [] };
    case 'SET_JOKE': {
      console.log('action.payload: ', action.payload);
      return { ...state, jokes: action.payload };
    }
    default:
      return state;
  }
};

export function getJokes() {
  return (dispatch, getState) => {
    fetch('http://api.icndb.com/jokes/random/5')
      .then((response) => response.json())
      .then((joke) => dispatch(setJoke(joke)));
  };
}

function setJoke(joke) {
  return { type: 'SET_JOKE', payload: joke };
}

export function clearJokes() {
  return {
    type: 'CLEAR_JOKES',
  };
}
