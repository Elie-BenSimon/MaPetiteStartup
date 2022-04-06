// === action types
export const TOGGLE_FORM_STATUS = 'TOGGLE_FORM_STATUS';
export const CHANGE_FORM_FIELD = 'CHANGE_FORM_FIELD';

// === action creators
export const toggleFormStatus = (button, isOpen) => ({
  type: TOGGLE_FORM_STATUS,
  button: button,
  isOpen: isOpen,
});

export const changeFormField = (newValue, fieldName) => ({
  type: CHANGE_FORM_FIELD,
  value: newValue,
  name: fieldName,
});
