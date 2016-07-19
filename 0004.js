var done = false;
var palindrome = "";

var i = 999
while (!done) {
  for (var j = 999; j > 800; j--) {
    palindrome = "" + j * i;
    if (isPalindrome(palindrome)) {
      done = true;
      break;
    }
  }
  i--;
}

// Returns true if a string is palindrome
function isPalindrome(str) {
  for (var count  = 0; count < str.length; count++) {
    if (str[count] != str[str.length - 1 - count])
      return false;
  }

  return true;
}

document.getElementById('answer').innerHTML = "Answer: " + palindrome;
console.log("Answer: " + palindrome);
