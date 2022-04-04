// === action types
export const RECRUIT_DEV = 'RECRUIT_DEV';
export const FIRE_DEV = 'FIRE_DEV';

// === action creators
export const fireDev = (id) => ({
  type: FIRE_DEV,
  id: id,
});

export const recruitDev = (devObj) => ({
  type: RECRUIT_DEV,
  dev: devObj,
});
