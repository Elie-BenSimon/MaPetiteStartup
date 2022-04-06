import { CHANGE_FORM_FIELD } from '../actions/homepage';

export const initialState = {
  name: '',
  slogan: '',
  logo: '',
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
