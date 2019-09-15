function highestSum(Y, N) {
  // write your code...
  yArray = [] // Helper arrays are awesome
  ans = 0
  hexAssign = {"A" : 10, "B" : 11, 'C' : 12, 'D' : 13, 'E' : 14, 'F' : 15}

  for (i of Y) { // Converts our Y string to an array of integers
    if (i in hexAssign) {yArray.push(hexAssign[i])}
    else {yArray.push(parseInt(i))}
  };

  for (i=0; i<yArray.length; i+=N) {
    sum = 0
    for (j=i; j<(N+i); j++) {sum += (yArray[j])}
    if (sum > ans) {ans = sum}
  }

  return ans
}

module.exports = highestSum;