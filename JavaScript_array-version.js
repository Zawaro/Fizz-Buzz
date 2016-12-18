//Fizz Buzz test in JavaScript, "array version" with HTML code in comments

var FizzArray = [];
var text = "";

for (i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    FizzArray.push("FizzBuzz");
  } else if (i % 3 === 0) {
    FizzArray.push("Fizz");
  } else if (i % 5 === 0) {
    FizzArray.push("Buzz");
  } else {
    FizzArray.push(i);
  }
}

for (j = 0; j < FizzArray.length; j++) {
  console.log(FizzArray[j]); // <-- comment this when using in HTML 
  // uncomment following:
  // text += FizzArray[j] + "<br>";
}


// uncomment following:
// document.getElementById("fizzBuzz").innerHTML = text;
