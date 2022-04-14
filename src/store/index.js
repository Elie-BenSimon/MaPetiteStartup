import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers/';
import userMiddleware from 'src/middlewares/userMiddleware';
import startupMiddleware from 'src/middlewares/startupMiddleware';
import projectMiddleware from 'src/middlewares/projectMiddleware';
import devMiddleware from 'src/middlewares/devMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(
  userMiddleware,
  startupMiddleware,
  projectMiddleware,
  devMiddleware,
);

const enhancers = composeEnhancers(
  middlewares,
);

const store = createStore(reducer, enhancers);

export default store;
