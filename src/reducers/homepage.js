import { TOGGLE_FORM_STATUS, CHANGE_SELECTION } from 'src/actions/homepage';

export const initialState = {
  connexionIsOpen: false,
  creationUserIsOpen: false,
  creationStartupIsOpen: false,
  selectedLogo: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // action for the form modals status
    case TOGGLE_FORM_STATUS:
      switch (action.button) {
        case 'connexion':
          return {
            ...state,
            connexionIsOpen: action.isOpen,
          };
        case 'creationUser':
          return {
            ...state,
            creationUserIsOpen: action.isOpen,
          };
        case 'creationStartup':
          return {
            ...state,
            creationStartupIsOpen: action.isOpen,
          };
        default: return state;
      }

    case CHANGE_SELECTION:
      return {
        ...state,
        selectedLogo: action.name,
      };

    default:
      return state;
  }
};

export default reducer;
