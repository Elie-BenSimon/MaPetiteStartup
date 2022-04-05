// === action types
export const TOGGLE_FORM_STATUS = 'TOGGLE_FORM_STATUS';

// === action creators
export const toggleFormStatus = (button, isOpen) => ({
  type: TOGGLE_FORM_STATUS,
  button: button,
  isOpen: isOpen,
});

