// Task 1

function printNumber(num) {
  console.log(`The number is: ${num}`);
}
function performOperation(number, callback) {
  callback(number);
}

performOperation(10, printNumber); // Output: The number is: 10

// Task 2

function printTransformedArray(array, callback) {
  const transformedArray = array.map(callback);
  console.log(transformedArray);
}

function transformArray(num) {
  return num * 2;
}

const numbers = [1, 2, 3];

printTransformedArray(numbers, transformArray); // Output: [2, 4, 6]

// ----------------------------------------------------------------

function printTransformedArray2(array, callback) {
  const result = [];
  for (let i = 0; i < numbers2.length; i++) {
    result.push(callback(numbers2[i]));
  }
  console.log(result);
}

const numbers2 = [1, 2, 3];

function transformArray2(num) {
  return num * 2;
}

printTransformedArray2(numbers2, transformArray2); // Output: [2, 4, 6]

// Task 3

function filterArray(array, callback) {
  const filteredArray = array.filter(callback);
  console.log(filteredArray);
  return filteredArray;
}
function isEven(num) {
  return num % 2 === 0;
}
const numbers3 = [1, 2, 3, 4];
const filteredNumbers = filterArray(numbers3, isEven); // Output: [2, 4, 6]

// ----------------------------------------------------------------

function filterArray2(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  console.log(result);
  return result;
}
function isEven2(num) {
  return num % 2 === 0;
}
const numbers4 = [1, 2, 3, 4];
const filteredNumbers2 = filterArray2(numbers4, isEven2); // Output: [2, 4, 6]

// ----------------------------------------------------------------

// Task 4

// ----------------------------------------------------------------
let num0 = [3, 8, 2, 10, 5];
let maxNum = Math.max(...num0);
console.log(maxNum);
// ----------------------------------------------------------------
let num1 = [3, 8, 2, 10, 5];
let minNumber = Math.min(...num1);
console.log(minNumber);
// ----------------------------------------------------------------
let num2 = 8.9;
let floored = Math.floor(num2);
console.log(floored);
// ----------------------------------------------------------------
let num3 = 4.1;
let ceiled = Math.ceil(num3);
console.log(ceiled);
// ----------------------------------------------------------------
let num4 = 6.75;
let rounded = Math.round(num4);
console.log(rounded);
// ----------------------------------------------------------------
let num5 = -20;
let absoluteVal = Math.abs(num5);
console.log(absoluteVal);
// ----------------------------------------------------------------
let num6 = 64;
let sqrtValue = Math.sqrt(num6);
console.log(sqrtValue);
// ----------------------------------------------------------------
let base = 5;
let exponent = 3;
let power = Math.pow(base, exponent);
console.log(power);
// ----------------------------------------------------------------
let randomNumber = Math.random();
console.log(randomNumber);
// ----------------------------------------------------------------
let num = 15.987;
let truncated = Math.trunc(num);
console.log(truncated);
// ----------------------------------------------------------------
