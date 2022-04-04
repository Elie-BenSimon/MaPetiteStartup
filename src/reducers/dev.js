import recruitableDevList from 'src/data/recruitableDevList';
import { RECRUIT_DEV } from '../actions/dev';

export const initialState = {
  recruitableDevList: recruitableDevList,
  devList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECRUIT_DEV:
      return {
        ...state,
        devList: [...state.devList, action.dev],
      };
    default:
      return state;
  }
};

export default reducer;
