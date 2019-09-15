// a + b * c =>   abc*+
function solution(expression) {
	//code goes in here....
	arrayExpression = expression.split()
	orderOfOperation = ['(', '/', '*', '+', '-'];
	ans = []
	function encode(operator,arrayExpression) {
		count = 0
		order = []
		ans = []
		for (i of orderOfOperation) {
			if (i in arrayExpression) {
				count++
				order.push(i)
			}
		}
		if ('(' in order) {
			b = str.split('(')[1].split(')')[0]
		}
		if (count = 1) {
			ans += str.split(operator)[0]+str.split(operator)[1]+operator //copyExpression[0]+copyExpression[2]+copyExpression[1]
			return ans
		}
		else if (count > 1) {
			arrayExpression = []
			ans += encode(order[0], )
		}
	}
	return ans
}



console.log(solution(''))