const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
  if (size > 20) {
    result = "Greather than 20";
  }
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

function oddEven(number) {
  return number % 2 == 0 ? "result should be even" : "result should be odd";
}

// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

function oldYoung(age) {
  let result;

  if (isNaN(age) || age < 0) {
    result = "invalid parameter";
  } else if (age < 50) {
    result = "young person";
  } else if (age < 16) {
    result = "children";
  } else {
    result = "elder person";
  }

  return `result should be ${result}`;
}

// TODO: Implement the oldYoung function

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung("Hallo Welt"));
// result should be invalid parameter
