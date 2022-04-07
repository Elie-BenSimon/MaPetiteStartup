const formatMoney = (initialValue) => {
  let unit = '';
  let value = initialValue;

  if (value >= 100000) {
    unit = 'K';
    value = Math.round(value / 1000);
    if (value >= 100000000) {
      unit = 'M';
      value = Math.round(value / 1000000);
    }
  }
  return `${value}${unit}`;
};

export default formatMoney;
