// === action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CHANGE_NEW_PROJECT_FIELD = 'CHANGE_NEW_PROJECT_FIELD';

// === action creators
export const changeNewProjectField = (newValue, name) => ({
  type: CHANGE_NEW_PROJECT_FIELD,
  value: newValue,
  name: name,
});

export const addProject = () => ({
  type: CREATE_PROJECT,
});
