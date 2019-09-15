
function divisible(A) {
  ansArray = []
  for (i of A) {
    if ((i%2==0 || i%3==0) && i>15) {
      ansArray.push(i)
    }
  }
  return ansArray.length
}

function totalAge(a) {
  ans = 0
  for (i of a) {
    ans += i.age
  }
  return ans
}

function checkAge(a,x) {
  ans = []
  for (i of a) {
    if ('age' in i) {
      ans.push(i)
    }
    else {
      i.age = 33
      ans.push(i)
    }
  }
  return ans
}

function sumAllAges(a) {
  ans = 0
  for (i of a) {
    ans += i.age
  }
  return ans
}

function sumDigits(a) {
  ans = 0
  var regex = /\d+/g;
  for (i of a) {
    if (parseInt(i.match(regex)) == i) {
      ans += parseInt(i)
    }
  }
  return ans
}
console.log(sumDigits('kjbda687q9hbkda83q'))
//console.log(sumAllAges([{'name':'ade', 'age':23}, {'name':'bola', 'age':16}, {'name':'taba', 'age':60}]))