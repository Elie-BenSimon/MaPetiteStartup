// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';
export const FIRE_DEV = 'FIRE_DEV';
export const CHANGE_PROJECT_ID = 'CHANGE_PROJECT_ID';
export const UPDATE_LASSITUDE = 'UPDATE_LASSITUDE';
export const CHANGE_DELTA_SKILL = 'CHANGE_DELTA_SKILL';
export const CHANGE_NEW_PLACES = 'CHANGE_NEW_PLACES';
export const CHANGE_PLACES = 'CHANGE_PLACES';

// === action creators
export const changePlaces = () => ({
  type: CHANGE_PLACES,
});

export const changeNewPlaces = (places) => ({
  type: CHANGE_NEW_PLACES,
  places: places,
});

export const changeDeltaSkill = (devId, projectDifficulty) => ({
  type: CHANGE_DELTA_SKILL,
  devId: devId,
  projectDifficulty: projectDifficulty,
});

export const updateLassitude = (devId, amount) => ({
  type: UPDATE_LASSITUDE,
  id: devId,
  amount: amount,
});

export const changeProjectId = (devIdArray, projectId) => ({
  type: CHANGE_PROJECT_ID,
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
