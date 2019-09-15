function readSyntax(syntax) {
  // code goes here
  let stack = []
  //let operationPair = {'{':'}', '[':']', '(':')', '<':'>'}
  let operationPair = {'}':'{', ']':'[', ')':'(', '>':'<'}
  for (i=0; i<syntax.length; i++) {
    if (stack.length === 0) {stack.push(syntax[i])}
    else {
      if (operationPair[syntax[i]] === stack[stack.length-1]) {stack.pop()}
      else {stack.push(syntax[i])}
    }
    // if (stack[stack.length-1] in operationPair) {return i} i
  }
  if (stack.length === 0) {
    return 'ok'
  }
}

console.log(readSyntax('{[[[[]<>]]]{}<><>[[[[[[]]]]]]{<>[]}}'.repeat(1000000)))