// SUM OF MULTIPLES -------------------------------------------------

// function sum(a, b) {
//   return a + b;
// }
// module.exports = sum;

function sumOfMuliples(num1, num2, num3, num4) {
  // calculate the multiples first, so say 1st multpile is num1 * num2, 2nd is num3 * num4
  var result = num1 * num2 + num3 * num4;
  return result;
}

console.log(sumOfMuliples(1, 2, 3, 4));

// STRING FUNCTIONS / METHODS ---------------------------------------

// .length property, usually used in loops, if > else statements etc
// example of usage of .length in an if/else statement

var a = "this is aaaaaa";
var b = "this is b";

if (a.length > b.length) {
  console.log("A is longer than B");
} else {
  console.log("B is longer than A");
}

// charCode(index)
// returns "r", at index 0
var string = "return me";
var res = string.charAt(0);
console.log(res);

function characterIndex(c) {
  let str = "HELLO WORLD";
  c = str.charCodeAt(0);
  return c;
}

// reversing a string
var rev = "reverse me bitch";
var output = rev
  .split(" ")
  .reverse(" ")
  .join(" ");
console.log(output);

// ARRAYS -------------------------------------------------------
var arr = ["one", "two", "three", 0, 23];
console.log(arr[0]);

// getting the longest element in array
var array = [3, 4, 5, 21.15, 21, 9];
var largest = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);
