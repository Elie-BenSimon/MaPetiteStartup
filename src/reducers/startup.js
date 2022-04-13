import { CHANGE_FORM_FIELD } from '../actions/homepage';
import {
  MODIFY_MONEY,
  MODIFY_REPUTATION,
  CHANGE_RENT,
  SAVE_STARTUP_ID,
} from '../actions/startup';

export const initialState = {
  name: '',
  slogan: '',
  logo: '',
  money: 6000,
  reputation: 0,
  rent: 500,
  startupId: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STARTUP_ID:
      return {
        ...state,
        startupId: action.id,
      };

    case CHANGE_RENT:
      return {
        ...state,
        rent: action.rent,
      };

    case CHANGE_FORM_FIELD:
      switch (action.name) {
        case 'name':
          return {
            ...state,
            name: action.value,
          };
        case 'slogan':
          return {
            ...state,
            slogan: action.value,
          };
        default:
          return state;
      }

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
