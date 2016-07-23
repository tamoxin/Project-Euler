var factors = 0;
var count = 1;
var triNum;

while (factors < 501) {
  triNum = getTriangleNum(count);
  factors = getNumberOfFactors(triNum);
  count ++;
}

document.getElementById('answer').innerHTML = "Answer: " + triNum;

function getNumberOfFactors(num) {
  if (num < 2)
    return 1;

  var numberOfFactors = 2;
  var sqrt = Math.pow(num, .5); //Checks all the factors in half of the time

  for (var i = 2; i < sqrt; i++)
    if (num % i == 0)
      numberOfFactors += 2;
  return numberOfFactors;
}

function getTriangleNum(num) {
  var triNum = 0;
  for (var i = 1; i <= num; i++)
    triNum += i;
  return triNum;
}
