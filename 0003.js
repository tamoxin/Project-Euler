var factor;
var number = 600851475143;
var msg;

// Might not be the cleverest solution, but who cares, it just works!!!
if(!isPrime(number)){
  for(var i = 2; i < number / 2 ; i++) {
    // It turns out that if you find the smallest factor, you also
    // get the largest factor.
    if (number % i == 0) {
      factor  = number / i;
      if (isPrime(factor)) {
        msg = "Answer: " + factor;
        console.log(msg);
        break;
      }
    }
  }
}else {
  msg = number + " is a prime number";
}

document.getElementById("answer").innerHTML = msg;

// ---------------------- functions part --------------------------

// This method makes a primality test.
// Returns true the given number is prime.
function isPrime(num){

  var root = Math.ceil(Math.pow(num, .5));

  // Check only once if the number is divisible by 2
  // or if the number is positive
  if ((num % 2 == 0 && num != 2) || num < 1) {
    return false;
  }

  for (var i = 3; i <= root; i+=2) {
    if (num % i == 0){
      return false;
    }
  }

  console.log(num + " Is prime!");
  return true;
}
