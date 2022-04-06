import {
  MODIFY_MONEY,
  MODIFY_REPUTATION,
} from 'src/actions/startup';

export const initialState = {
  money: 50000,
  reputation: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case MODIFY_MONEY:
      return {
        ...state,
        money: state.money + action.amount,
      };
    case MODIFY_REPUTATION:
      return {
        ...state,
        reputation: state.reputation + action.amount,
      };
    default:
      return state;
  }
};

export default reducer;
