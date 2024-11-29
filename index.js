// Task 1

const countVowel = (str) => {
  const count = "AIOUEƏİÖÜ";
  let vowelCount = 0;
  for (let el of str.toUpperCase()) {
    if (count.includes(el)) {
      vowelCount++;
    }
  }
  return vowelCount;
};
console.log("--------------------------");
console.log("Azərbaycan", countVowel("Azərbaycan")); // Output: 3

const countVowel1 = (str1) => {
  const count1 = "aıoueəiöü";
  let vowelCount1 = 0;
  for (let el of str1.toLowerCase()) {
    if (count1.includes(el)) {
      vowelCount1++;
    }
  }
  return vowelCount1;
};

// Task 2

console.log("Türkiyə", countVowel1("Türkiyə")); // Output: 3
console.log("--------------------------");

function printEvens(count) {
  for (let i = 1; i <= count; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvens(10); // Output: 2 4 6 8 10
console.log("--------------------------");

function printEvens1(count) {
  for (let i = 2; i <= count; i += 2) {
    console.log(i);
  }
}
printEvens(10); // Output: 2 4 6 8 10
console.log("--------------------------");

// Task 3

function sumDigits(num) {
  const numString = num.toString();
  let sum = 0;
  for (let i = 0; i < numString.length; i++) {
    sum += +numString[i];
  }
  return sum;
}
console.log(sumDigits(123)); // Output: 15
console.log("--------------------------");

// Task 4
function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

multiplicationTable(5);

function multiplicationTable1(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable1(10);

// Task 5

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzBuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);
