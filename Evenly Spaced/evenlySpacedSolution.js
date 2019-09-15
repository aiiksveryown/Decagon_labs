function evenlySpaced(a, b, c) {
    //Provide your solution here
    if ((a >= b) && (a >= c)) {
      if (b>=c) {return (Math.abs(a-b) === Math.abs(c-b))} 
      else {return (Math.abs(a-c) === Math.abs(c-b))}
    }
    if (b >= a && b >= c) {
      if (a >= c) {return Math.abs(b-a) === Math.abs(c-a)}
      else {return Math.abs(c-b) === Math.abs(c-a)}
    }
    if (c >= a && c >= b) {
      if (b >= a) {return Math.abs(b-c) === Math.abs(b-a)}
      else {return Math.abs(c-a) === Math.abs(b-a)}
    }
  }

module.exports = evenlySpaced;