import recruitableDevListData from 'src/data/recruitableDevList';
import { RECRUIT_DEV, FIRE_DEV } from '../actions/dev';

export const initialState = {
  // the list of hireable devs
  recruitableDevList: recruitableDevListData,
  // the list of employees
  devList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECRUIT_DEV:
      return {
        ...state,
        devList: [...state.devList, action.dev],
        recruitableDevList:
          state.recruitableDevList.filter((dev) => (dev.id !== action.dev.id)),
      };
    case FIRE_DEV:
      return {
        ...state,
        devList:
          state.devList.filter((dev) => (dev.id !== action.id)),
      };
    default:
      return state;
  }
};

export default reducer;
