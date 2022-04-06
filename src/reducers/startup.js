import { CHANGE_FORM_FIELD } from '../actions/homepage';

export const initialState = {
  name: '',
  slogan: '',
  logo: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // action for controlled fields of the homepage forms
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
