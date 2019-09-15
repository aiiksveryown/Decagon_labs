a = [1,2,3,4]

a.splice(1,1)

function socksLaundering(numberMachineCanWash, cleanSocks, 
numberOfcleanSocks, dirtySocks, numberOfDirtySocks){
  let ans = 0
  let theArray = []
  let theObject = {}
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
  }cleanSocks
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
  uniqueDirty
  for (i of uniqueDirty) {dirtySocks
    if (dirtySocks.includes(i)) {
      dirtySocks.splice(findIndex(dirtySocks, i), 1)
    }
  }
  dirtySocks
  for (i of dirtySocks) {
    if (numberMachineCanWash > 1) {ans++; numberMachineCanWash -= 2}
  }
  return ans
}
const numberMachineCanWash = 4;
  const cleanSocks = [1, 1, 1, 1, 1, 1];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [1, 2, 2, 1, 3, 4, 5, 2];
  const numberOfDirtySocks = dirtySocks.length;
console.log(socksLaundering(numberMachineCanWash, cleanSocks, 
  numberOfCleanSocks, dirtySocks, numberOfDirtySocks))