/**
 * return an array with length equal to number provided
 * example : 5 will result in array = [1,1,1,1,1]
 * @param {int} number
 * @returns {array}
 */
const arrayify = (number, numberOfOne = number) => {
  const array = [];
  for (let i = 0; i < number; i += 1) {
    if (i < numberOfOne) {
      array[i] = true;
    }
    else {
      array[i] = false;
    }
  }
  return array;
};

export default arrayify;
