import recruitableDevListData from 'src/data/recruitableDevList';
import {
  RECRUIT_DEV,
  FIRE_DEV,
  MODIFY_PROJECT_ID,
  UPDATE_LASSITUDE,
} from '../actions/dev';

export const initialState = {
  // the list of hireable devs
  recruitableDevList: recruitableDevListData,
  // the list of employees
  devList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // updating dev lassitude
    case UPDATE_LASSITUDE:
      return {
        ...state,
        devList: [...state.devList].map((dev) => {
          if (action.id === dev.id) {
            return { ...dev, lassitude: dev.lassitude + action.amount };
          }
          return dev;
        }),
      };
    // changing code_project of the dev in array of employees
    case MODIFY_PROJECT_ID:
      return {
        ...state,
        // first, we map the entire dev list to modify conditionnaly
        devList: [...state.devList].map((dev) => {
          // secondly, when a dev match with one id in action.devIdArray,
          // we assign him the new code_project
          if (action.devIdArray.find((idToChange) => idToChange === dev.id)) {
            return { ...dev, code_project: action.projectId };
          }
          // else, return unmodified dev
          return dev;
        }),
      };
    case RECRUIT_DEV:
      return {
        ...state,
        devList: [...state.devList, action.dev],
        // remove a dev from hireable list
        recruitableDevList:
          state.recruitableDevList.filter((dev) => (dev.id !== action.dev.id)),
      };
    case FIRE_DEV:
      return {
        ...state,
        devList:
        // remove a dev from employees list
          state.devList.filter((dev) => (dev.id !== action.id)),
      };
    default:
      return state;
  }
};

export default reducer;
