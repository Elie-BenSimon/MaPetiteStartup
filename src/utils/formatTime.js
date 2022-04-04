// add a zero before numbers inferior to ten
const getTwoDigits = (val) => (val < 10 ? `0${val}` : val);

/**
 * return time with format hour:minutes
 * @param {object} date
 * @returns {string} hh:mm
 */
export const getFormattedHours = (date) => {
  const mins = getTwoDigits(date.getMinutes());
  const hrs = getTwoDigits(date.getHours());
  return `${hrs}:${mins}`;
};

/**
 * return date with format day/month/year
 * @param {object} date
 * @returns {string} dd/mm/yyyy
 */
export const getFormattedDate = (date) => {
  const day = getTwoDigits(date.getDate());
  const month = getTwoDigits(date.getMonth() + 1);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
