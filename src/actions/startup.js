// === action types
export const MODIFY_MONEY = 'MODIFY_MONEY';
export const MODIFY_REPUTATION = 'MODIFY_REPUTATION';

// === action creators
export const modifyReputation = (amount) => ({
  type: MODIFY_REPUTATION,
  amount: amount,
});

export const modifyMoney = (amount) => ({
  type: MODIFY_MONEY,
  amount: amount,
});
