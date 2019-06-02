// JS TDD PRACTICE
// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Basic test to see if two given numbers will be added
function sum(a, b) {
  return a + b;
}

test("Adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// Test to return first character
let string = "return me";
let res = string.charAt(0);

test("Returns the first character", () => {
  expect(res).toBe("r");
});

// largest in array
let arr = [3, 4, 5, 21.15, 21, 9];
let largest = 0;

for (i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

test("Finds the largest array element", () => {
  expect(arr.length).toBeGreaterThan[0];
});

// reversing a string
let rev = "reverse me bitch";
let output = rev
  .split(" ")
  .reverse(" ")
  .join(" ");

test("Reverses given string", () => {
  expect(output).toBe("bitch me reverse");
});

// Checks if A or B is greater than the other
let a = "this is aaaaaa";
let b = "this is b";

// if (a.length > b.length) {
//   console.log("A is longer than B");
// } else {
//   console.log("B is longer than A");
// }

test("Retuns which value is bigger than the other one", () => {
  expect(a.length).toBeGreaterThan(b.length);
});

//
