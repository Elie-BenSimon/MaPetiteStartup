import { UPDATE_TIME } from '../actions/startup';

export const initialState = {
  initialDate: Date.now(),
  actualDate: Date.now(),
  timeSpeed: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        actualDate: action.date,
      };
    default:
      return state;
  }
};

export default reducer;
