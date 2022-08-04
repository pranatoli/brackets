module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < str.length; i++) {
    for (const key in bracketsConfig) {
      if (bracketsConfig[key][1] === (str[i]) && bracketsConfig[key][0] === str[i - 1]) {
        str = str.slice(0, i - 1) + str.slice(i + 1, str.length);
        i = 0;
      }
    }
  }
  return str.length === 0 ? true : false;
}
