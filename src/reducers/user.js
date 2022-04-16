import { CHANGE_FORM_FIELD } from '../actions/homepage';
import {
  LOG_OUT,
  SAVE_USER_ID,
  SAVE_TOKEN,
} from '../actions/user';

export const initialState = {
  email: 'aboubakar@gmail.com',
  password: 'test',
  token: '',
  userId: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case SAVE_USER_ID: {
      return {
        ...state,
        userId: action.id,
      };
    }
    // action for controlled fields of the homepage forms
    case CHANGE_FORM_FIELD:
      switch (action.name) {
        case 'email':
          return {
            ...state,
            email: action.value,
          };
        case 'password':
          return {
            ...state,
            password: action.value,
          };
        default:
          return state;
      }

    case LOG_OUT:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};

export default reducer;
