// === action types
export const UPDATE_TIME = 'UPDATE_TIME';

// === action creators
export const updateTime = (newDate) => ({
  type: UPDATE_TIME,
  date: newDate,
});
