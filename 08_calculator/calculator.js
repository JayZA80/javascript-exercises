const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let total = 0;
  array.map(number => {
    total += number
  });
  return number
};

const multiply = function(x, y) {
  return x * y;
};

const power = function(x, y) {
  let finalNumber = 0;
	for (let i = 0; i <= y; i++) {
    finalNumber += x * x;
  }
  return finalNumber;
};

const factorial = function(x) {
	let nums = [x];
  let currentValue = x;
  while (currentValue > 1) {
    nums.push(currentValue - 1);
    currentValue--;
  }
  return nums.reduce((x, y) => {x * y});
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
