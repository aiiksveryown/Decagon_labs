// a + b * c =>   abc*+
function solution(expression) {
  arrayExpression = expression.split(' ')
  orderOfOperation = {};
  Operations = {'/':4, '*':3, '+':2, '-':1};
	ans = []
  for (i=0; i<arrayExpression.length; i++) {
    console.log(arrayExpression)
    if (arrayExpression[i] in Operations) {
      orderOfOperation[arrayExpression[i]] = Operations[arrayExpression[i]]
      console.log(orderOfOperation)
    }
  }
  foremostOperand = Object.keys(orderOfOperation).reduce(function(a, b){ return orderOfOperation[a] > orderOfOperation[b] ? a : b });
  function encode(foremostOperand, arrayExpression, orderOfOperation) {
    for (i of arrayExpression) {
      //console.log(arrayExpression)
      //console.log(orderOfOperation)
      if (i in orderOfOperation && i == foremostOperand) {
        arrayExpression[arrayExpression.indexOf(i)-1] = arrayExpression[arrayExpression.indexOf(i)-1] + arrayExpression[arrayExpression.indexOf(i)+1] + arrayExpression[arrayExpression.indexOf(i)]
        //console.log(i)
        arrayExpression.splice(arrayExpression.indexOf(i), 2)
        //console.log(arrayExpression)
      }
    }
    if (arrayExpression.length > 1) {
      foremostOperand = Object.keys(orderOfOperation).reduce(function(a, b){ return orderOfOperation[a] > orderOfOperation[b] ? a : b });
      delete orderOfOperation[foremostOperand]
      return encode(foremostOperand, arrayExpression, orderOfOperation)
    }
    else {
      return arrayExpression
    }
  }
  return arrayExpression
}



console.log(solution("a + b - c"))