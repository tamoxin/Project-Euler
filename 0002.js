var previous = 1;
var current = 2;
var aux;
var sum = 0;

while (current < 4000000) {
  if (current % 2 == 0)
    sum += current;

  aux = current + previous;
  previous = current;
  current = aux;
}

document.getElementById("answer").innerHTML = "Answer: " + sum;
console.log(sum);
