import { UPDATE_TIME } from '../actions/startup';

export const initialState = {
  date: new Date(Date.now()),
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        date: action.date,
      };
    default:
      return state;
  }
};

export default reducer;
