function sumNumbers (str) {
  // your code goes here...
  let numbers = {'0':0, '1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9}
  let theArray = []
  let ans = 0
  let theString = ''
  for (i of str) {
    if (parseInt(i) === numbers[i]) {
       theString += i
    }
    else {
      if (theString.length > 0) {
        theArray.push(theString)
        theString = ''
      }
    }
  }
  if (theString.length > 0) {theArray.push(theString)}
  for (i of theArray) {ans += parseInt(i)}
  return ans
}

module.exports = sumNumbers