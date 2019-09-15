function highestNumPosition(array) {
  // write you code here...
  rowMax = -1;
  ans = [];
  row = 0;
  column = 0;
  for (i=0; i<array.length; i++) {
    for (j=0; j<array[i].length; j++) {
      if (array[i][j] > rowMax) {
        rowMax = array[i][j];
        row = i
        column = j;
      } 
    }
  }
  ans.push(row, column);
  return ans
}

module.exports = highestNumPosition;