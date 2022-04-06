// === action types
export const LOG_IN = 'LOG_IN';

// === action creators
export const logIn = (token) => ({
  type: LOG_IN,
  token: token,
});
