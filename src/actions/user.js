// === action types
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SIGN_IN = 'SIGN_IN';
export const SAVE_USER_ID = 'SAVE_USER_ID';
export const SAVE_TOKEN = 'SAVE_TOKEN';

// === action creators
export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token: token,
});

export const saveUserId = (id) => ({
  type: SAVE_USER_ID,
  id: id,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});
