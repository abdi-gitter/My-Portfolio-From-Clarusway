'use strict';

// let index = 1;
// let sum = 0;

//? sum all the numbers from 1 to 5
// sum = sum + 1;
// sum = sum + 2;
// sum = sum + 3;
// sum = sum + 4;
// sum = sum + 5;

// while (index < 6) {
//   sum = sum + index;
//   index++;
// }

// console.log(sum);

//? Guesing game

// // const randomNumber = 8
// const randomNumber = Math.ceil(Math.random() * 10);
// console.log(randomNumber);

// let found = false;

// // while (found === false) {
// while (!found) {
//   const guess = +prompt('Enter your guess! ');

//   if (guess === randomNumber) {
//     console.log('Congratz! You found the number!');
//     found = true;
//   } else if (guess > randomNumber) {
//     console.log('Go lower!');
//   } else {
//     console.log('Go Higher');
//   }
// }

//? Force user to enter a valid number

// let number = +prompt('Enter a number');

// console.log(number);

// // while (!number) {
// while (isNaN(number)) {
//   number = +prompt('Please enter a valid number!');
// }

// console.log(number);

//! FOR LOOPS

//? sum numbers from 1 to 5

// let sum = 0;

// // for (let i = 1; i < 101; i++) {
// //   sum = sum + i;
// // }

// for (let i = 100; i > 0; i--) {
//   sum = sum + i;
// }

// console.log(sum);

//? Seperate letters with -
// const text = 'Clarusway is an IT Bootcamp'; // "C-l-a-r-u-s-w-a-y-"
// //            012345678
// let result = '';

// // console.log(text[4]);

// for (let i = 0; i < text.length; i++) {
//   result = result + text[i] + '-';
// }

// console.log(result);

//? multiplication table
// const number = +prompt('Enter a number from 1 to 10');

// for (let i = 0; i < 11; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }

//? calculate factorial

// const number = +prompt('Enter a positive number');

// let factorial = 1;

// // for (let i = 1; i <= number; i++) {
// //   factorial = factorial * i;
// // }

// for (let i = number; i > 1; i--) {
//   factorial = factorial * i;
// }

// console.log(`${number}! = ${factorial}`);

//! Break and Continue Statements

// for (let i = 0; i < 10; i++) {
//   if (i === 6) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

//? list the numbers from 1 to 20 not divisible by 3
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;

//   console.log(i);
// }

//? odd numbers from 11 to 25

// for (let i = 10; i < 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   if (i > 25) {
//     break;
//   }

//   console.log(i);
// }

//! Nested for loops
// [56, 25, 14, 33, 45]

// for (let i = 1; i <= 10; i++) {
//   console.log('*******************');
//   console.log(i);
//   console.log('*******************');

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

//! Exercises
//? Q1: Reverse a String
// const text = prompt('Enter a text');
// let result = '';

// // for (let i = text.length - 1; i >= 0; i--) {
// //   result = result + text[i];
// // }

// for (let i = 0; i < text.length; i++) {
//   result = text[i] + result;
// }

// console.log(result);

//? Q2: Palindrome Words
// madam   madam
// racecar

// if (text === result) {
//   console.log('This is palindrome', result, text);
// } else {
//   console.log('This is not palindrome', result, text);
// }

//? Q3: Remove vowels

// const text = 'monday';
// let result = '';

// for (let i = 0; i < text.length; i++) {
//   if (
//     !(
//       text[i] === 'a' ||
//       text[i] === 'e' ||
//       text[i] === 'i' ||
//       text[i] === 'o' ||
//       text[i] === 'u'
//     )
//   )
//     continue;
//   result = result + text[i];
// }

// console.log(result);

//? Q4: sum the digits

const number = 45234; // 4+5+2+3+4
const strNumber = number.toString();

let result = 0;

for (let i = 0; i < strNumber.length; i++) {
  result = result + Number(strNumber[i]);
}

console.log(result);
