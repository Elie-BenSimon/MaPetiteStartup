import { combineReducers } from 'redux';

import devReducer from './dev';
import projectReducer from './project';
import userReducer from './user';
import startupReducer from './startup';

// Combination of all reducers
const rootReducer = combineReducers({
  dev: devReducer,
  project: projectReducer,
  user: userReducer,
  startup: startupReducer,
});

export default rootReducer;
