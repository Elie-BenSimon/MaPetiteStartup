// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';

// === action creators
export const recruitDev = (devObj) => ({
  type: RECRUIT_DEV,
  dev: devObj,
});
