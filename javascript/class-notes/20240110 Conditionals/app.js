//! Hint : Every input provided by user is String
// let age = Number(prompt('Enter your age'));
// let age = parseInt(prompt('Enter your age'));
// let age = parseFloat(prompt('Enter your age'));
// let age = +prompt('Enter your age');

// if (age > 18) {
//   console.log('You are allowed');
// } else {
//   console.log('Not Allowed!');
// }

//? Odd or Even Number
// const number = +prompt('Enter a number');

// if (number % 2 === 1) {
//   console.log(number, 'is an odd number');
// } else {
//   console.log(number, 'is an even number');
// }

// if (number % 2) {
//   console.log(number, 'is an odd number');
// } else {
//   console.log(number, 'is an even number');
// }

//? Compare 2 numbers

// const num1 = 80;
// const num2 = 50;

// // if (num1 > num2) {
// //   console.log(num1, 'is greater');
// // } else {
// //   console.log(num2, 'is greater');
// // }

// if (num1 > num2) {
//   console.log(`${num1} is greater than ${num2}`);
// } else {
//   console.log(`${num2} is greater than ${num1}`);
// }

//? Nested if
// const score = +prompt("Enter your score")
// const score = 95;
// let grade;

// if (score >= 90) {
//   grade = 'A';
// } else if (score >= 80) {
//   grade = 'B';
// } else if (score >= 70) {
//   grade = 'C';
// } else if (score >= 60) {
//   grade = 'D';
// } else {
//   grade = 'F';
// }

// console.log(grade);

// //? compare 3 numbers
// const num1 = 50;
// const num2 = 60;
// const num3 = 100;

// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is the greatest number among ${num2} and ${num3}`);
//   // } else if (num2 > num1 && num2 > num3) {
// } else if (num2 > num3) {
//   console.log(`${num2} is the greatest number among ${num1} and ${num3}`);
// } else {
//   console.log(`${num3} is the greatest number among ${num1} and ${num2}`);
// }

//? switch statement

// const product = '10';
// let price;
// switch (product) {
//   case 'pen': {
//     price = 10;
//     break;
//   }
//   case 'pencil': {
//     price = 15;
//     break;
//   }
//   case 'ink': {
//     price = 5;
//     break;
//   }
//   case 10: {
//     price = 100;
//     break;
//   }
//   default: {
//     price = 'not found';
//   }
// }

// console.log(`Price of ${product} is ${price}`);

//? ternary if statement

// const num1 = 85;
// const num2 = 55;
// // let greatest;

// // if (num1 > num2) {
// //   greatest = num1;
// // } else {
// //   greatest = num2;
// // }

// let greatest = num1 > num2 ? num1 : num2;

// console.log(`Greatest number is ${greatest}`);

//? odd or even

// const number = 11;

// const result = number % 2 === 1 ? 'odd' : 'even';
// // ""
// // ''
// // ``
// console.log(`${number} is an ${result} number`);

//? score result
// const score = 50;

// // if (score > 70) {

// // } else {

// // }

// const result = score > 70 ? 'You passed!' : 'You failed!';

// console.log(result);

//? calculate new rate
// const currentRate = 30;

// const result = currentRate < 20 ? currentRate * 1.5 : currentRate + 10;

// console.log(result);

//? shorthand if

// const mode = 'dark';

// if (mode === 'dark') {
//   console.log('Dark mode is activated');
// }

// mode === 'dark' && console.log('Dark mode is activated');

//? default value with or operator
// const level = +prompt('Enter level from 0 to 10');
// // if we try to convert a sting into a number that does not have numeric value then it will NaN

// // const actualLevel = level || 5;
// // ?? nulish coalescing operator and dont treat 0 as falsy
// const actualLevel = level ?? 5;

// console.log(level);
// console.log(actualLevel);
