var number = 2520;

var i = 20;
while (i > 1) {
  if (number % i != 0) {
    i = 20;
    number += 20;
  } else {
    i--;
    if (i == 1)
      break;
  }
}

document.getElementById('answer').innerHTML = "Answer: " + number;
