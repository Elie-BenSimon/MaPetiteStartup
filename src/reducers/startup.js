import {
  CHANGE_FORM_FIELD
} from '../actions/homepage';
import {
  SAVE_STARTUP_ID,
  CHANGE_NAME,
  CHANGE_SLOGAN,
  CHANGE_LOGO,
  CHANGE_MONEY,
  CHANGE_REPUTATION,
  CHANGE_RENT,
} from '../actions/startup';

export const initialState = {
  startupId: null,
  name: '',
  slogan: '',
  logo: '',
  money: 6000,
  reputation: 0,
  rent: 500,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_STARTUP_ID:
      return {
        ...state,
        startupId: action.id,
      };

    case CHANGE_NAME:
      return {
        ...state,
        name: action.name,
      };

    case CHANGE_LOGO:
      return {
        ...state,
        logo: action.logo,
      };

    case CHANGE_SLOGAN:
      return {
        ...state,
        slogan: action.slogan,
      };

    case CHANGE_MONEY:
      return {
        ...state,
        money: state.money + action.amount,
      };

    case CHANGE_REPUTATION:
      return {
        ...state,
        reputation: state.reputation + action.amount,
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


    default:
      return state;
  }
};

export default reducer;
