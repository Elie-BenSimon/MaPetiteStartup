// === action types
export const MODIFY_MONEY = 'MODIFY_MONEY';

// === action creators
export const modifyMoney = (amount) => ({
  type: MODIFY_MONEY,
  amount: amount,
});
