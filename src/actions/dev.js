// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';
export const FIRE_DEV = 'FIRE_DEV';
export const MODIFY_PROJECT_ID = 'MODIFY_PROJECT_ID';
export const UPDATE_LASSITUDE = 'UPDATE_LASSITUDE';

// === action creators
export const updateLassitude = (devId, amount) => ({
  type: UPDATE_LASSITUDE,
  id: devId,
  amount: amount,
});

export const modifyProjectId = (devIdArray, projectId) => ({
  type: MODIFY_PROJECT_ID,
  devIdArray: devIdArray,
  projectId: projectId,
});

export const fireDev = (devId) => ({
  type: FIRE_DEV,
  id: devId,
});

export const recruitDev = (devObj) => ({
  type: RECRUIT_DEV,
  dev: devObj,
});
