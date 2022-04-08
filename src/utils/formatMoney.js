const formatMoney = (initialValue) => {
  let unit = '';
  let value = initialValue;

  if (initialValue >= 1000) {
    unit = 'K';
    value = Math.round(initialValue / 1000);
    if (initialValue >= 1000000) {
      unit = 'M';
      value = Math.round(initialValue / 100000) / 10;
    }
  }
  return `${value}${unit}`;
};

export default formatMoney;
