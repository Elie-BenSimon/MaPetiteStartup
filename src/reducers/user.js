import { CHANGE_FORM_FIELD } from '../actions/homepage';
import { LOG_IN } from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  token: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    case LOG_IN:
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
