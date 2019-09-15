//This function takes three parameters, the first is a number and the second and third are arrays.
//The second parameter is an array of operations which cold contain one or more of "+", "-", and "*"
//The third array is an arry of numbers which are the second participants in the operations
//If you encounter an unknown command in the second array, return -1.

function interpret(a,b,c) {
  operators = {
    '+' : function(x,y) {return x+y},
    '-' : function(x,y) {return x-y},
    '*' : function(x,y) {return x*y}
  }
  for (i of b) {
    if (!(i in operators)) {
      return -1
    }
  }
  ans = a;
  for (i=0; i<b.length; i++) {
    ans = operators[b[i]](ans,c[i])
  }
  return ans 
}

module.exports = interpret;