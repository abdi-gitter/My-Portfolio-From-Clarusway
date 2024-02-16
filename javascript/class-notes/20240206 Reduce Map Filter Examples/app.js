//! Array.reduce
//? callback function (reducer function) is called for every item of the array
//? callback function takes 4 parameters. First one is the accumulator
//? callback function has to return a value. And this returned value automatically assinged to the accumulator

// const numbers = [1, 4, 6, 9, 11, 20];

// let sum = 0;

// for (item of numbers) {
//   sum += item;
// }

// sum = numbers.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// sum = numbers.reduce((acc, item) => acc + item, 0);

// console.log(sum);

//! Exercises
//! Task 1: implement an auto-complete system that finds matching words in a array
// arr = [dear, dog, dentist, dean, duck]
// input = de --> dear, dean, dentist
// input = du --> duck

// const words = ['dear', 'dog', 'dentist', 'dean', 'duck', 'alde'];
// const input = 'de';

// // const result = words.filter(function (item) {
// //   if (item.startsWith(input)) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // });

// const result = words.filter((item) => item.startsWith(input));

// console.log(result);

//! Task 2 : Filter out null and undefined values from an array.
// const values = [1, null, 2, undefined, 3, 4, 'hello', 0];
// // const result = values.filter((item) => {
// //   if (item !== null && item !== undefined) {
// //     return true;
// //   }
// // });

// const result = values.filter((item) => item || item === 0);

// console.log(result);

//! Task 3 : Abbreviate words of a sentence
// str = "Clarusway is an IT bootcamp"
// ouput = CIAIB

// const str = 'Clarusway is an IT bootcamp';
// // step-1 : convert str into array of words        ["Clarusway","is","an","IT","bootcamp"]
// const arr = str.split(' ');
// console.log(arr);
// // step-2 : convert array into array of first letters    ["C","I","A","I","B"]
// const arr2 = arr.map((item) => item[0].toUpperCase());
// console.log(arr2);
// // step-3 : convert array into string         "CIAIB"
// const result = arr2.join('');
// console.log(result);

//! Task 4 : Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript';
// // Result = "E3y d7r l3s to mix k8s and j8t";

// // step 1 : convert string into array of words
// const arr = input.split(' ');
// console.log(arr);
// // step 2 : convert array of words into array of abbreviated words
// // step 2.1 : check the length of item, if it is more than 4 abbriavate it else return item as it is
// // step 2.2 : abbriavate : take the firsl letter, and the last letter, and calculate the remaining letters in between
// const arr2 = arr.map((item) => {
//   if (item.length < 4) {
//     return item;
//   } else {
//     let abbr = item[0];
//     let remaining = item.slice(1).length - 1;
//     abbr = abbr + remaining.toString() + item[item.length - 1];
//     return abbr;
//   }
// });

// console.log(arr2);
// // step 3 : convert array into strings
// const result = arr2.join(' ');
// console.log(result);

//! Task 5 : Filter out strings that do not start with a vowel.
// const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
// const wovels = ['a', 'e', 'i', 'o', 'u'];
// // [a, e, i, o, u]
// // use filter
// // callback function will check the first letter of the item, if that letter is in vowels we will return false else return true

// // const result = words.filter((item) => {
// //   let first = item[0].toLowerCase();
// //   if (wovels.includes(first)) {
// //     return false;
// //   } else {
// //     return true;
// //   }
// // });

// const result = words.filter((item) => !wovels.includes(item[0].toLowerCase()));

// console.log(result);

//! Task 6 : Find Product of All Elements Except the One at Index i
// Problem Statement:
//? Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

// const inputArray = [1, 2, 3, 4, 5]; // 120
// output = [120, 60, 40, 30, 24]

// step 1 : find the product of this arr
// let product = 1;
// for (let item of inputArray) {
//   product *= item;
// }
// let product = inputArray.reduce((acc, item) => acc * item, 1);
// console.log(product);
// // step 2 : do map return product divided by item
// const result = inputArray.map((item) => product / item);
// console.log(result);

// const result = inputArray.map((item, index) => {
//   const left = inputArray.slice(0, index);
//   // console.log(left);
//   let leftProduct = 1;
//   for (let item of left) {
//     leftProduct *= item;
//   }
//   // console.log(leftProduct);
//   const right = inputArray.slice(index + 1);
//   // console.log(right);
//   let rightProduct = 1;
//   for (let item of right) {
//     rightProduct *= item;
//   }
//   // console.log(rightProduct);

//   return leftProduct * rightProduct;
// });

// console.log(result);

//! Task 7 : display only the unique items in the array
// prices = [100, 150, 200, 50, 100, 250, 200, 100, 50, 25]
// unique result [100, 150, 200, 50, 250, 25]

// const prices = [100, 150, 200, 50, 100, 250, 200, 100, 50, 25];
// const unique = [];

// prices.forEach((item) => {
//   //   if (unique.includes(item)) {
//   //   } else {
//   //     unique.push(item);
//   //   }
//   if (!unique.includes(item)) {
//     unique.push(item);
//   }
// });

// const unique = prices.reduce((acc, item) => {
//   if (!acc.includes(item)) {
//     acc.push(item);
//   }
//   return acc;
// }, []);

// console.log(unique);

//! Task 8 : Filter out strings that are not palindromes.
const words = ['level', 'hello', 'racecar', 'world'];

// const palindromes = words.filter((item) => {
//   //   const arr = item.split('');
//   //   arr.reverse();
//   //   const reversedStr = arr.join('');
//   const reversedStr = item.split('').reverse().join('');

//   return item === reversedStr;
// });

const palindromes = words.filter(
  (item) => item === item.split('').reverse().join('')
);

console.log(palindromes);

// find
// findIndex
