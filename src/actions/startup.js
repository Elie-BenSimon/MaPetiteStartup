// === action types
export const MODIFY_MONEY = 'MODIFY_MONEY';
export const MODIFY_REPUTATION = 'MODIFY_REPUTATION';
export const CHANGE_NEW_PLACES = 'CHANGE_NEW_PLACES';
export const CHANGE_RENT = 'CHANGE_RENT';
export const CREATE_STARTUP = 'CREATE_STARTUP';
export const SAVE_STARTUP_ID = 'SAVE_STARTUP_ID';

// === action creators
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

export const modifyReputation = (amount) => ({
  type: MODIFY_REPUTATION,
  amount: amount,
});

export const modifyMoney = (amount) => ({
  type: MODIFY_MONEY,
  amount: amount,
});
