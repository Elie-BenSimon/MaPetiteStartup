// === action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CHANGE_NEW_PROJECT_FIELD = 'CHANGE_NEW_PROJECT_FIELD';
export const UPDATE_COMPLETION = 'UPDATE_COMPLETION';
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT';

// === action creators
export const completeProject = (projectId) => ({
  type: COMPLETE_PROJECT,
  projectId: projectId,
});

export const updateCompletion = (completionToAdd, projectId) => ({
  type: UPDATE_COMPLETION,
  completionToAdd: completionToAdd,
  projectId: projectId,
});

export const changeNewProjectField = (newValue, name) => ({
  type: CHANGE_NEW_PROJECT_FIELD,
  value: newValue,
  name: name,
});

export const createProject = () => ({
  type: CREATE_PROJECT,
});
