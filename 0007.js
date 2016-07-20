var num;
var count;

count = 0;
num = 2;
while (count < 10001) {
  if(isPrime(num)){
    count ++;
  }
  num++;
}

num -= 1;

document.getElementById('answer').innerHTML = "Answer: " + num;
console.log("Answer: " + num);

// ------------------ functions part -------------------------
function isPrime(num) {
  //Check for the exceptions
  if (num % 2 == 0 && num != 2 || num < 2)
    return false;

  for(var i = 3; i <= Math.pow(num, .5); i += 2) {
    if (num % i == 0)
      return false;
  }

  return true;
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
