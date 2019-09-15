function socksLaundering(numberMachineCanWash, cleanSocks, 
numberOfcleanSocks, dirtySocks, numberOfDirtySocks){
  let ans = 0
  uniqueClean = Array.from(new Set(cleanSocks))
  function findIndex(array, a) {
    for (i=0; i<array.length; i++) {
      if (array[i] === a) {
        return i
      }
    }
  }
  for (i of uniqueClean) {uniqueClean
    if (cleanSocks.includes(i)) {cleanSocks.splice(findIndex(cleanSocks, i), 1)}
  }
  ans += cleanSocks.length; ans
  for (i of cleanSocks) {uniqueClean
    if (uniqueClean.includes(i)) {uniqueClean.splice(findIndex(uniqueClean, i), 1)}
  }
  for (i of uniqueClean) {
    if (dirtySocks.includes(i) && numberMachineCanWash>0) {
      ans++; numberMachineCanWash--;
      dirtySocks.splice(findIndex(dirtySocks, i), 1)
    }
  }
  uniqueDirty = Array.from(new Set(dirtySocks))
  for (i of uniqueDirty) {uniqueDirty
    if (dirtySocks.includes(i)) {
      dirtySocks.splice(findIndex(dirtySocks, i), 1)
    }
  }
  for (i of dirtySocks) {
    if (numberMachineCanWash > 1) {ans++; numberMachineCanWash -= 2}
  }
  return ans
}
module.exports = socksLaundering;