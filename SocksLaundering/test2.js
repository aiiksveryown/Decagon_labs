function socksLaundering(number_machine_can_wash, clean_socks, 
  number_of_clean_socks, dirty_socks, number_of_dirty_socks){
  let ans = 0
  let stack2 = []
  let stack = []
  let theObject = {}
  let theHelper = ''
  for (i of clean_socks) {i; stack
    if (stack.length === 0) {stack.push(i); stack}
    else {
      while (stack.length > 0) {
        if (!(clean_socks.includes(stack[stack.length-1]))) {// i !== stack[stack.length-1]
          stack2.push(stack.pop()); stack
        }
        else {stack.pop(); stack; break}
      }
      while (stack2.length > 0) {stack.push(stack2.pop()); stack}
      stack
    }
  }
  return stack
}
const numberMachineCanWash = 2;
  const cleanSocks = [2, 3, 1, 2, 3];
  const numberOfCleanSocks = cleanSocks.length;
  const dirtySocks = [3, 3, 4, 1, 2, 7, 9];
  const numberOfDirtySocks = dirtySocks.length;
console.log(socksLaundering(numberMachineCanWash, cleanSocks, 
  numberOfCleanSocks, dirtySocks, numberOfDirtySocks))