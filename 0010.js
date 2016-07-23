var sum = 0;

for (var i = 0; i < 2000000; i++) {
  if (isPrime(i))
    sum += i;
}

document.getElementById('answer').innerHTML = "Answer: " + sum;
console.log("Answer: " + sum);

//------------ functions part --------------
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
