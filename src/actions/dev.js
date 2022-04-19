// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';
export const FIRE_DEV = 'FIRE_DEV';
export const CHANGE_PROJECT = 'CHANGE_PROJECT';
export const UPDATE_LASSITUDE = 'UPDATE_LASSITUDE';
export const CHANGE_DELTA_SKILL = 'CHANGE_DELTA_SKILL';
export const CHANGE_NEW_PLACES = 'CHANGE_NEW_PLACES';
export const CHANGE_PLACES = 'CHANGE_PLACES';
export const REINITIALIZE_DEV_STATE = 'REINITIALIZE_DEV_STATE';
export const SET_RECRUITABLE_DEVLIST = 'SET_RECRUITABLE_DEVLIST';
export const GET_RECRUITABLE_DEVLIST = 'GET_RECRUITABLE_DEVLIST';
export const REQUEST_DEV = 'REQUEST_DEV';
export const SET_DEVLIST = 'SET_DEVLIST';
export const PATCH_DEV = 'PATCH_DEV';

// === action creators
export const patchDev = (devId, data) => ({
  type: PATCH_DEV,
  id: devId,
  data: data,
});

export const setDevlist = (data) => ({
  type: SET_DEVLIST,
  data: data,
});

export const requestDev = (devId) => ({
  type: REQUEST_DEV,
  id: devId,
});

export const getRecruitableDevList = () => ({
  type: GET_RECRUITABLE_DEVLIST,
});

export const setRecruitableDevList = (data) => ({
  type: SET_RECRUITABLE_DEVLIST,
  data: data,
});

export const reinitializeDevState = () => ({
  type: REINITIALIZE_DEV_STATE,
});

export const changePlaces = (places) => ({
  type: CHANGE_PLACES,
  places: places,
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

export const changeProject = (devIdArray, projectId) => ({
  type: CHANGE_PROJECT,
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
