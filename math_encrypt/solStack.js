// a + b * c =>   abc*+
function solution(expression) {
  //code goes in here....
  stack = []
  infix = expression.replace(/ /g,'')
  postfix = ''
  Operations = {'(':0, ')':0, '/':4, '*':3, '+':2, '-':1};
  for (i of infix) {
    if (!(i in Operations)) {
      postfix += i
    }
    else {
      if (stack.length === 0 || stack[stack.length-1] === '(' || i === '(') {
        stack.push(i)
        stack
      }
      else if (i === ')') {
        stack
        while (stack[stack.length-1] !== '(') {
          postfix += stack.pop()
          stack
        }
        stack.pop()
      }
      else {
        while (true) {
          if (Operations[stack[stack.length-1]] >= Operations[i]) {
            postfix += stack.pop()
          }
          else {stack.push(i); break}
        }    
      }
    }
  }
  while (stack.length > 0) {
    stack
    postfix += stack.pop()
  }
  stack
  return postfix
}
console.log(solution("7 + ( 4 - 9 ) * 6"))