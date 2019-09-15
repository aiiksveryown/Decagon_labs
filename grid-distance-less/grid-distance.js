function gridDistance(arrayOfDirections) {
  // write your code here
  mappedDirection = {}
  ans = 0
  var regex = /\d+/g;
  function redundantMotion(a,b) {
    if (a in mappedDirection && b in mappedDirection) {
      if (mappedDirection[a] > mappedDirection[b]) {mappedDirection[b] = -mappedDirection[b]}
      else {mappedDirection[a] = -mappedDirection[a]}
    }
    return mappedDirection
  }
  for (i of arrayOfDirections) {
    if (i.split('-')[1] in mappedDirection) {
      mappedDirection[i.split('-')[1]] += parseInt(i.match(regex)[0])
    }
      else {mappedDirection[i.split('-')[1]] = parseInt(i.match(regex)[0])};
  }
  redundantMotion('east', 'west')
  redundantMotion('north', 'south')
  for (i in mappedDirection) {ans += mappedDirection[i]};
  ans += "km"
  return ans
}

module.exports = gridDistance;
