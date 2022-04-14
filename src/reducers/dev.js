import recruitableDevListData from 'src/data/recruitableDevList';
import {
  RECRUIT_DEV,
  FIRE_DEV,
  CHANGE_PROJECT_ID,
  UPDATE_LASSITUDE,
  CHANGE_DELTA_SKILL,
  CHANGE_NEW_PLACES,
  CHANGE_PLACES,
  SAVE_DEV,
} from '../actions/dev';

export const initialState = {
  // the list of hireable devs
  recruitableDevList: recruitableDevListData,
  // the list of employees
  devList: [],
  // total available places for dev
  totalPlaces: 5,
  // controlled input for relocation
  newTotalPlaces: 15,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PLACES:
      return {
        ...state,
        totalPlaces: state.newTotalPlaces,
      };

    case CHANGE_NEW_PLACES:
      if (action.places >= state.devList.length) {
        return {
          ...state,
          newTotalPlaces: action.places,
        };
      }
      return state;

      // save the difference between dev skill and project difficulty
    case CHANGE_DELTA_SKILL:
      return {
        ...state,
        devList: [...state.devList].map((dev) => {
          if (action.devId === dev.id) {
            return {
              ...dev,
              deltaSkill: Math.abs(dev.skill - action.projectDifficulty)
            };
          }
          return dev;
        }),
      };
      // updating dev lassitude
    case UPDATE_LASSITUDE:
      return {
        ...state,
        devList: [...state.devList].map((dev) => {
          if (action.id === dev.id) {
            return {
              ...dev,
              lassitude: dev.lassitude + action.amount
            };
          }
          return dev;
        }),
      };
      // changing code_project of the dev in array of employees
    case CHANGE_PROJECT_ID:
      return {
        ...state,
        // first, we map the entire dev list to change conditionnaly
        devList: [...state.devList].map((dev) => {
          // secondly, when a dev match with one id in action.devIdArray,
          // we assign him the new code_project
          if (action.devIdArray.find((idToChange) => idToChange === dev.id)) {
            return {
              ...dev,
              code_project: action.projectId
            };
          }
          // else, return unmodified dev
          return dev;
        }),
      };
    case RECRUIT_DEV:
      if (state.devList.length < state.totalPlaces) {
        return {
          ...state,
          devList: [...state.devList, action.dev],
          // remove a dev from hireable list
          recruitableDevList: state.recruitableDevList.filter((dev) => (dev.id !== action.dev.id)),
        };
      }
      return state;
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
