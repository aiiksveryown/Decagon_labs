// a + b * c =>   abc*+
function solution(expression) {
  //code goes in here....
  let stack = []
  let infix = expression.replace(/ /g,'')
  let ans = ''
  Operations = {'(':0, ')':0, '/':3, '*':3, '+':2, '-':1};
  for (i of infix) {
    if (!(i in Operations)) {
      ans += i
    }
    else {
      if (stack.length === 0 || stack[stack.length-1] === '(' || i === '(') {
        stack.push(i)
      }
      else if (i === ')') {
        while (stack[stack.length-1] !== '(') {
          ans += stack.pop()
        }
        stack.pop()
      }
      else {
        while (true) {
          if (Operations[stack[stack.length-1]] >= Operations[i]) {
            ans += stack.pop()
          }
          else {stack.push(i); break}
        }    
      }
    }
  }
  while (stack.length > 0) {
    ans += stack.pop()
  }
  return ans
}

module.exports = solution;
