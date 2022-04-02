import {
  UPDATE_ACTUAL_DATE,
  UPDATE_REFERENCE_DATE,
  CHANGE_TIME_SPEED,
  UPDATE_INGAME_REFERENCE_DATE,
  UPDATE_INGAME_TIME,
} from '../actions/startup';

export const initialState = {
  // the real time
  actualDate: Date.now(),
  // used to calculate ingame time, equal to the real time when exiting pause
  referenceDate: Date.now(),
  // used to calculate ingame time, equal to the ingame time when entering pause
  ingameReferenceDate: Date.now(),
  // the time speed multiplicator of the game
  timeSpeed: 2000,
  // actual ingame time
  ingameTime: Date.now(),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_INGAME_TIME:
      return {
        ...state,
        ingameTime: action.ingameTime,
      };
    case UPDATE_INGAME_REFERENCE_DATE:
      return {
        ...state,
        ingameReferenceDate: action.ingameReferenceDate,
      };
    case CHANGE_TIME_SPEED:
      return {
        ...state,
        timeSpeed: action.timeSpeed,
      };
    case UPDATE_ACTUAL_DATE:
      return {
        ...state,
        actualDate: Date.now(),
      };
    case UPDATE_REFERENCE_DATE:
      return {
        ...state,
        referenceDate: Date.now(),
      };
    default:
      return state;
  }
};

export default reducer;
