// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';
export const FIRE_DEV = 'FIRE_DEV';
export const MODIFY_PROJECT_ID = 'MODIFY_PROJECT_ID';

// === action creators
export const modifyProjectId = (devIdArray, projectId) => ({
  type: MODIFY_PROJECT_ID,
  devIdArray: devIdArray,
  projectId: projectId,
});

export const fireDev = (id) => ({
  type: FIRE_DEV,
  id: id,
});

export const recruitDev = (devObj) => ({
  type: RECRUIT_DEV,
  dev: devObj,
});
