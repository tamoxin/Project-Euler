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
  //if (num < 2)
    //return 1;

  var numberOfFactors = 2;
  for (var i = 2; i < num; i++)
    if (num % i == 0)
      numberOfFactors++;
  return numberOfFactors;
}

function getTriangleNum(num) {
  var triNum = 0;
  for (var i = 1; i <= num; i++)
    triNum += i;
  return triNum;
}
