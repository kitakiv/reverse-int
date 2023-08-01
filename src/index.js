module.exports = function reverse (n) {
  let index = 0;
  let result = '';
  str = n.toString();
  while (str.length > index) {
    if (str[index] !== '-' && str[str - 1] !== '0') {
        result = `${str[index]}${result}`
    }
    index ++;
  }
  return parseInt(result);
}
