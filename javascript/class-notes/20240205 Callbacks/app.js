//! Declerative ve Imperative
// const arr = [2, 4, 6, 8, 10];
// const sqr = [];

// for (let i = 0; i < arr.length; i++) {
//   sqr.push(arr[i] ** 2);
// }

// for (let item of arr) {
//   sqr.push(item ** 2);
// }

// for (let i in arr) {
//   console.log(i, arr[i], typeof i);
// }

// console.log(sqr);

//! Higher Order Functions and Callback Functions

// function greet(name) {
//   console.log('Hello ', name);
// }

// greet(true);

// function add(num1, num2) {
//   return num1 + num2;
// }

// const sub = function (num1, num2) {
//   return num1 - num2;
// };

// const mul = (num1, num2) => {
//   return num1 * num2;
// };

// const div = (num1, num2) => num1 / num2;

// function calculator(num1, num2, callback) {
//   const result = callback(num1, num2);
//   return result;
// }

// console.log(calculator(100, 50, add));
// console.log(calculator(100, 50, sub));
// console.log(calculator(100, 50, mul));
// console.log(calculator(100, 50, div));

//! Array.forEach
//? it is an Array method
// let x = 10;
// x.forEach((element) => {});
//? takes a callback function which can have 3 parameters
//? does not mutate the original array
//? it does not return any value
//? it loops over the items of array one by one

// const payments = [500, 1000, -400, -800, 1500, 2000];

// function callback(item, index, arr) {
//   console.log(item, index, arr);
// }

// payments.forEach(callback);
// // callback(500, 0, [........])
// // callback(1000, 1, [........])

// payments.forEach(function (item, index) {
//   console.log(item, index);
// });

// payments.forEach((item, index) => {
//   console.log(item, index);
// });

// payments.forEach((item) => {
//   //   if (item > 0) {
//   //     console.log(`You received $${item}`);
//   //   } else {
//   //     console.log(`You paid $${-item}`);
//   //   }
//   item > 0
//     ? console.log(`You received $${item}`)
//     : console.log(`You paid $${-item}`);
// });

//? Exercise sum odd numbers

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// arr.forEach((item) => {
//   if (item % 2 === 1) {
//     sum += item;
//   }
// });

// console.log(sum);

//! Array.map()
//? it is an Array method
//? takes a callback function which can have 3 parameters
//? does not mutate the original array
//? map returns a brand new array as a result of callback function on items
//? map is used for transformation
//? it loops over the items of array one by one

// const numbers = [1, 2, 3, 4, 5];

// const dblNumbers = numbers.map((item) => item * 2);
// // const dblNumbers = numbers.map(function (item) {
// //   return item ** 2;
// // });

// console.log(numbers);
// console.log(dblNumbers);

// words = ['clarusWay', 'fullStacK', 'paTh'];

// // const titleWords = words.map(function (item) {
// //   const lower = item.toLowerCase();
// //   const result = lower[0].toUpperCase() + lower.slice(1);
// //   return result;
// // });

// // const titleWords = words.map(function (item) {
// //   return item[0].toUpperCase() + item.slice(1).toLowerCase();
// // });

// const titleWords = words.map(
//   (item) => item[0].toUpperCase() + item.slice(1).toLowerCase()
// );

// console.log(titleWords.join(' '));

//? exercise double evens and keep odds as they are

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // const newNumbers = numbers.map(function (item) {
// //   if (item % 2 === 0) {
// //     return item * 2;
// //   } else {
// //     return item;
// //   }
// // });

// // const newNumbers = numbers.map((item) => {
// //   return item % 2 === 0 ? item * 2 : item;
// // });

// const newNumbers = numbers.map((item) => (item % 2 === 0 ? item * 2 : item));

// console.log(newNumbers);

//? convert into HTML code

// const users = [
//   'John Doe',
//   'Jane Smith',
//   'Tony Black',
//   'Adam Smith',
//   'Tim Shark',
// ];

// const html = users.map((item) => `<li>${item}</li>`);

// console.log(html);

//! Array.filter()
//? it is an Array method
//? takes a callback function which can have 3 parameters
//? does not mutate the original array
//? map returns a brand new array. Callback function will return true or false. If it returns true that item to pushed to the brand new array.
//? filter is used for filtering the items based on a rule
//? it loops over the items of array one by one

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// // const newMonths = months.filter(function (item) {
// //   if (item.length > 5) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });

// const newMonths = months.filter((item) => item.length > 5);

// console.log(newMonths);

// const payments = [500, 1000, -400, -800, 1500, 2000];

// const incomes = payments.filter((item) => item > 0);

// console.log(incomes);

//? filter odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = numbers.filter((item) => item % 2 === 1);
// const dblOdds = odds.map((item) => item * 2);
const dblOdds = numbers
  .filter((item) => item % 2 === 1)
  .map((item) => item * 2);

console.log(dblOdds);
