// === action types
export const CHANGE_MONEY = 'CHANGE_MONEY';
export const CHANGE_REPUTATION = 'CHANGE_REPUTATION';
export const CHANGE_NEW_PLACES = 'CHANGE_NEW_PLACES';
export const CHANGE_RENT = 'CHANGE_RENT';
export const CREATE_STARTUP = 'CREATE_STARTUP';
export const SAVE_STARTUP_ID = 'SAVE_STARTUP_ID';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_SLOGAN = 'CHANGE_SLOGAN';
export const CHANGE_LOGO = 'CHANGE_LOGO';
export const REINITIALIZE_STARTUP_STATE = 'REINITIALIZE_STARTUP_STATE';
export const TOGGLE_NEW_NOTIFICATION = 'TOGGLE_NEW_NOTIFICATION';

// === action creators
export const toggleNewNotification = (isNew) => ({
  type: TOGGLE_NEW_NOTIFICATION,
  isNew: isNew,
});

export const reinitializeStartupState = () => ({
  type: REINITIALIZE_STARTUP_STATE,
});

export const changeLogo = (logo) => ({
  type: CHANGE_LOGO,
  logo: logo,
});

export const changeSlogan = (slogan) => ({
  type: CHANGE_SLOGAN,
  slogan: slogan,
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name: name,
});

export const saveStartupId = (id) => ({
  type: SAVE_STARTUP_ID,
  id: id,
});

export const createStartup = () => ({
  type: CREATE_STARTUP,
});

export const changeRent = (rent) => ({
  type: CHANGE_RENT,
  rent: rent,
});

export const changeNewPlaces = (places) => ({
  type: CHANGE_NEW_PLACES,
  places: places,
});

export const changeReputation = (amount) => ({
  type: CHANGE_REPUTATION,
  amount: amount,
});

export const changeMoney = (amount) => ({
  type: CHANGE_MONEY,
  amount: amount,
});
