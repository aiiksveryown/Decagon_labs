
function evenlySpaced(a, b, c) {
  //Provide your solution here
  array = [] //because I forgot how to get absolute values
  
  if (a>=b) {
    if (a>=c) {array.push(a)}
    else {array.push(c)}
  }
  else {
    if (b>c) {push(b)}
  }
  return array
}
console.log(evenlySpaced(2,4,6))