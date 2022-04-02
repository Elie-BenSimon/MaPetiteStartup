// === action types
export const UPDATE_ACTUAL_DATE = 'UPDATE_ACTUAL_DATE';
export const UPDATE_REFERENCE_DATE = 'UPDATE_REFERENCE_DATE';
export const CHANGE_TIME_SPEED = 'CHANGE_TIME_SPEED';
export const UPDATE_INGAME_REFERENCE_DATE = 'UPDATE_INGAME_REFERENCE_DATE';
export const UPDATE_INGAME_TIME = 'UPDATE_INGAME_TIME';

// === action creators
export const updateIngameTime = (date) => ({
  type: UPDATE_INGAME_TIME,
  ingameTime: date,
});

export const updateIngameReferenceDate = (date) => ({
  type: UPDATE_INGAME_REFERENCE_DATE,
  ingameReferenceDate: date,
});

export const changeTimeSpeed = (newSpeed) => ({
  type: CHANGE_TIME_SPEED,
  timeSpeed: newSpeed,
});

export const updateReferenceDate = (date) => ({
  type: UPDATE_REFERENCE_DATE,
  referenceDate: date,
});

export const updateActualDate = () => ({
  type: UPDATE_ACTUAL_DATE,
});
