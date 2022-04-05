import { combineReducers } from 'redux';

import devReducer from './dev';
import projectReducer from './project';
import userReducer from './user';
import startupReducer from './startup';
import timerReducer from './timer';
import homepageReducer from './homepage';

// Combination of all reducers
const rootReducer = combineReducers({
  dev: devReducer,
  project: projectReducer,
  user: userReducer,
  startup: startupReducer,
  timer: timerReducer,
  homepage: homepageReducer,
});

export default rootReducer;
