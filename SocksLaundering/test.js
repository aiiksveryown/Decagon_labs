function socksLaundering(number_machine_can_wash, clean_socks, 
  number_of_clean_socks, dirty_socks, number_of_dirty_socks){
  let ans = 0
  let theArray = []
  let theObject = {}
  let theHelper = ''
  let cs = arrayToObject(clean_socks)
  function findIndex(array, a) {
    for (i=0; i<array.length; i++) {
      if (array[i] === a) {
        return i
      }
    }
  }
  function arrayToObject(array) {
    count = 0
    theObject = {}
    for (i of array) {count++; theObject[i] = count}
    return theObject
  }
  a = findIndex(clean_socks, 2)
  for (i of clean_socks) {
    i
    theArray.push(clean_socks.shift())
    if ( clean_socks.includes(theArray[theArray.length-1])) {
      a = findIndex(clean_socks, i)
      a
      clean_socks.splice(a, 1) = a
      clean_socks
    }
    else {theArray.pop(); clean_socks.unshift()}
  }
  clean_socks
}
const numberMachineCanWash = 2;
  const cleanSocks = [1, 2, 3, 1, 2, 3];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [3, 3, 4, 1, 2, 7, 9];
  const numberOfDirtySocks = dirtySocks.length;
console.log(socksLaundering(numberMachineCanWash, cleanSocks, 
  numberOfCleanSocks, dirtySocks, numberOfDirtySocks))