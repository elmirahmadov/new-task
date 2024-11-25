// Task 1

let arr = [1, 2, 3, 4];
let sum = 0;
for (let num of arr) {
  sum += num;
}
console.log(sum); // Output: 10

// Task 2

let number = 5;

let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log(factorial); // Output: 120

// Task 3

let arr3 = [3, 7, 2, 8, 5];
let max = arr3[0];

for (let i = 0; i <= arr3.length; i++) {
  let element = arr3[i];
  if (element > max) max = element;
}

console.log(max); // Output: 8

// Task 4

let str = "Hello"; // stringimiz
let newStr = ""; // boş stringimiz

for (let i = str.length - 1; i >= 0; i--) {
  // Hello yazısını tərsdən sıralayır
  newStr += str[i]; // o l l e H olaraq boş stringinin içərisinə doldurur.
}

console.log(newStr); // Output: olleH

// Task 5 Method 1

let numbers1 = [7, 4, 9, 32, 11, 23];
for (let j = 0; j < numbers1.length; j++) {
  let number2 = numbers1[j];
  let isPrime1 = number2 > 1;
  for (let i = 2; i < number2; i++) {
    if (number2 % i === 0) {
      isPrime1 = false;
      break;
    }
  }
  console.log(`${number2} is prime: ${isPrime1}`);
}

// Task 5 Method 2

let numbers = [1, 7, 4, 9, 32, 11, 23, 27, 50];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number <= 1) {
    console.log(`${number} ne sadedir ne murekkeb`);
    continue;
  }
  let isPrime = true;
  for (let j = 2; j < number; j++) {
    if (number % j == 0) {
      console.log(`${number} murekkebdir`);
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} sadedir`);
  }
}
