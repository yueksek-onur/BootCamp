function oddNumbers(start, end) {
  let output = "";

  if (isNaN(start) || isNaN(end) || start >= end || start < 0) {
    return "Invalid input parameters please check your input!";
  }

  for (let i = start; i < end; i++) {
    if (i !== 0 && i % 2 !== 0) {
      output = output + i + ",";
    }
  }
  return output.substring(0, output.length - 1);
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

function charCount(inputString, countingChar) {
  let count = 0;

  if (countingChar.length > 1) {
    return "Invalid input: Your second input parameter is more than one character!";
  }

  Array.from(inputString).forEach((element) => {
    if (element.toLowerCase() == countingChar.toLowerCase()) count++;
  });
  return count;
}

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("ResümEEEee", "esCoding task: Using loops"));
// result should be: 3
