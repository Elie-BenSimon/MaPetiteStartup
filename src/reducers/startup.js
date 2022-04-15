import investment from 'src/assets/img/logo/investment.png';
import money from 'src/assets/img/logo/money.png';
import okay from 'src/assets/img/logo/okay.png';
import rocket from 'src/assets/img/logo/rocket.png';
import thunder from 'src/assets/img/logo/thunder.png';
import shaka from 'src/assets/img/logo/shaka.png';

import {
  CHANGE_FORM_FIELD,
} from '../actions/homepage';
import {
  SAVE_STARTUP_ID,
  CHANGE_NAME,
  CHANGE_SLOGAN,
  CHANGE_LOGO,
  CHANGE_MONEY,
  CHANGE_REPUTATION,
  CHANGE_RENT,
  REINITIALIZE_STARTUP_STATE,
} from '../actions/startup';

export const initialState = {
  startupId: null,
  name: '',
  slogan: '',
  logos: [investment, money, okay, rocket, thunder, shaka],
  logoIndex: 2,
  money: 6000,
  reputation: 0,
  rent: 500,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // completely clean startup state
    case REINITIALIZE_STARTUP_STATE:
      return {
        ...state,
        ...initialState,
      };

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
        logoIndex: action.logo,
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
