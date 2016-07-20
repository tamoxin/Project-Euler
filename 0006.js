var total = sqrOfSum(100) - sumOfSqr(100);

document.getElementById('answer').innerHTML = "Answer: " + total;
console.log("Answer: " + total);

//------------------- functions part ------------------------
function sumOfSqr(n) {
  if (n == 1)
    return 1;

  return n * n + sumOfSqr(n - 1);
}

function sumValues(n) {
  if (n == 1)
    return 1;

  return n + sumValues(n -1);
}

function sqrOfSum(n) {
  var total = sumValues(n);

  return total * total;
}
