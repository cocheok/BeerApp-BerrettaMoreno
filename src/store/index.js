import { createStore, combineReducers } from 'redux';

import { elementsReducer } from './reducers';

const rootReducer = combineReducers({
  elements: elementsReducer
});

export default createStore(rootReducer);
