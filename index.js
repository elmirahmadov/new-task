// task 1
let text = "hello";

let textlength = text.length;

console.log(textlength); // burada Hello yazısının hərif uzunluğunu göstərir.

// task 2

const element = 4;

const el = 11;

const arr = Array(element).fill(el);

console.log(arr); // burada el dəyərini elementdəki say qədər Arrayın daxilində yazır. [11, 11, 11, 11]

// task 3

let text1 = "Javascript";

console.log(text1[0].toUpperCase() + text1.slice(1)); // burada toUpperCase text1-in sıfırıncı indexsini böyük hərf etməyimizdə kömək edir.
//daha sorna isə həmin yazınən 1ci indexinə qədər 1 daxil olmamaq şərti ilə silib avascript yazısını ilk dəyər J nin dəvamında qeyd edirik və Javascript yazısını alırıq.

// task 4

let name1 = "John doe";

console.log(name1.toUpperCase());

// task 5

let weather = "Today is a sunny day.";

// Expected Result: "Today is a rainy day"

let nowWeather = weather.replace("sunny", "rainy"); // replace ilk dəyəri ikinci dəyər ilə dəyişdirir.

console.log(nowWeather);

// task 6

let text2 = "Javascript is a funny language";

console.log(text2.split(" ")); // ['Javascript', 'is', 'a', 'funny', 'language']

// task 7

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
let searchedFruit = "Orange";
fruits.push(searchedFruit);

if (fruits.includes(searchedFruit)) {
  console.log("Found the fruit");
} else {
  console.log("Not found the fruit");
}
console.log(fruits);

// task 8

let firstName = ["john", "Jane"];
let lastName = ["Doe", "Smith"];

let newarr = firstName.concat(lastName);
newarr.pop();
newarr.shift();

console.log(newarr);

// task 9

let text3 = "JavaScript";
let result = text3.split("");

console.log(result.reverse().join(""));

// task 10

let fruits1 = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits1.indexOf("Banana"));
