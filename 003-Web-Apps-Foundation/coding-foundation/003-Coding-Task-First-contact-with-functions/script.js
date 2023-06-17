console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

//#########################

function welcomeMsg(name) {
  return `Welcome ${name}!`;
}

function calcGrossPrice(price, taxRate) {
  return price * (taxRate + 1);
}

function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}
