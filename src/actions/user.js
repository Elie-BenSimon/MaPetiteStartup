// === action types
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// === action creators
export const logIn = (token) => ({
  type: LOG_IN,
  token: token,
});

export const logOut = () => ({
  type: LOG_OUT,
});
