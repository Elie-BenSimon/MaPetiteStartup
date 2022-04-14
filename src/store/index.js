import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/';
import userMiddleware from 'src/middlewares/userMiddleware';
import startupMiddleware from 'src/middlewares/startupMiddleware';
import projectMiddleware from 'src/middlewares/projectMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(userMiddleware, startupMiddleware, projectMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
