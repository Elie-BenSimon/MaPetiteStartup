import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/';
import userMiddleware from 'src/middlewares/userMiddleware';
import startupMiddleware from 'src/middlewares/startupMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(userMiddleware, startupMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
