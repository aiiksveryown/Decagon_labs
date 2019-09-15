function switchChar (inputChar, actualChar, changeChar){
  ans = ''
  keyMap = {};
  // Code goes here
  if (actualChar.length !== changeChar.length) {return "Length mismatch"};
  if (actualChar !== Array.from(new Set(actualChar)).join('')) {return 'Repeated value'};
  if (inputChar.length > actualChar.length) {return -1};
  for (i of inputChar) {
    if (!(actualChar.includes(i))) {return -1};
  }
  for (i=0; i<actualChar.length; i++) {
    if (!(actualChar[i] in keyMap)) {
      keyMap[actualChar[i]] = changeChar[i]
    };
  };
  for (i of inputChar) {
    ans += keyMap[i]
  };
  return ans;
};

module.exports = switchChar;
