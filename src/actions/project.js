// === action types
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CHANGE_NEW_PROJECT_FIELD = 'CHANGE_NEW_PROJECT_FIELD';
export const UPDATE_COMPLETION = 'UPDATE_COMPLETION';
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT';
export const SAVE_PROJECT = 'SAVE_PROJECT';
export const REINITIALIZE_PROJECT_STATE = 'REINITIALIZE_PROJECT_STATE';
export const SET_PROJECTS_LIST = 'SET_PROJECTS_LIST';
export const SET_DIFFICULTIES = 'SET_DIFFICULTIES';

// === action creators
export const setDifficulties = (data) => ({
  type: SET_DIFFICULTIES,
  data: data,
});

export const setProjectsList = (data) => ({
  type: SET_PROJECTS_LIST,
  data: data,
});

export const reinitializeProjectState = () => ({
  type: REINITIALIZE_PROJECT_STATE,
});

export const completeProject = (projectId, projectName, completionMax) => ({
  type: COMPLETE_PROJECT,
  projectId: projectId,
  projectName: projectName,
  completionMax: completionMax,
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

export const saveProject = (projectId) => ({
  type: SAVE_PROJECT,
  projectId: projectId,
});
