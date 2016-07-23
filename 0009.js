var a = 1;
var b = 2;
var c = 997;
var product = 0;
var sum;
var bSqr;
var cSqr;

while (c > b) {
  bSqr = pow(b, 2);
  cSqr = pow(c, 2);
  a = 1;
  while (b > a) {
    sum = pow(a, 2) + bSqr;
    if (sum > cSqr) {
      a++
    }
  }
}

document.getElementById('answer').innerHTML = "Answer: " + product;
console.log("Answer: "  + product);

// ------------------- functions part --------------------------

// Returns true if the number is an Integer value.
function isInt(num) {
  return num % 1 === 0;
}

//               **WARNING**
// This function only works for integer numbers. :(
// Do not use it with floating point numbers.
// Anyway I'm leaving it here, you don't know when
// you can need your own pow(a,b) function.
function pow(base, exponent) {
  if(exponent == 0)
    return 1;

  return base * pow(base, exponent - 1);
}
