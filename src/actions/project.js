// === action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CHANGE_NEW_PROJECT_FIELD = 'CHANGE_NEW_PROJECT_FIELD';
export const UPDATE_COMPLETION = 'UPDATE_COMPLETION';
export const MODIFY_COMPLETION_RATE = 'MODIFY_COMPLETION_RATE';

// === action creators
export const modifyCompletionRate = (completionToAdd, projectId) => ({
  type: MODIFY_COMPLETION_RATE,
  completionToAdd: completionToAdd,
  projectId: projectId,
});

export const updateCompletion = (completionToAdd) => ({
  type: UPDATE_COMPLETION,
  completionToAdd: completionToAdd,
});

export const changeNewProjectField = (newValue, name) => ({
  type: CHANGE_NEW_PROJECT_FIELD,
  value: newValue,
  name: name,
});

export const createProject = () => ({
  type: CREATE_PROJECT,
});
