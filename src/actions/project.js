// === action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CHANGE_NEW_PROJECT_FIELD = 'CHANGE_NEW_PROJECT_FIELD';
export const UPDATE_COMPLETION = 'UPDATE_COMPLETION';
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT';
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const REINITIALIZE_PROJECT_STATE = 'REINITIALIZE_PROJECT_STATE';

// === action creators
export const reinitializeProjectState = () => ({
  type: REINITIALIZE_PROJECT_STATE,
});

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

export const createProject = (test) => ({
  type: CREATE_PROJECT,
  test: test,
});

export const saveProject = (projectId) => ({
  type: SAVE_PROJECT,
  projectId: projectId,
});
