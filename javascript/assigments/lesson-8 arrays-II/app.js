console.log('***** Arrays Functions *****');

// ******************************

// ! 1. Write a JavaScript function to find the difference of two arrays

// ? Example: input = difference([1, 2, 3], [100, 2, 1, 10]) => output = ["3", "10", "100"]

// const array1 = [1, 2, 3];
// const array2 = [100, 2, 1, 10];

// const differenceOfArrays = (arr1, arr2) => {
//   const diffArr = [];
//   for (let i of arr1) {
//     if (!arr2.includes(i)) {
//       diffArr.push(i);
//     }
//   }
//   for (let i of arr2) {
//     if (!arr1.includes(i)) {
//       diffArr.push(i);
//     }
//   }
//   return diffArr.sort((a, b) => a - b);
// };

// console.log(differenceOfArrays(array1, array2));

// ******************************

// ! 2. Write a JS code to filter strings that have more than 5 characters in the list below.

// ? Example: input = const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'] => output = ["elephant", "desert",  "pumpkin"]

// const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'];

// const longWords = arr => {
//   let newArr = [];
//   for (let i of arr) {
//     if (i.length > 5) newArr.push(i);
//   }
//   return newArr;
//   return arr.filter(word => word.length > 5);
// };

// console.log(longWords(words));

// ******************************

// ! 3. Write a JavaScript program to find duplicate values in a array.

// ? Example: input = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6] => output = ["4", "7"]

// const array = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

// const findDublicatesInArrays = arr => {
//   let newArr = [];
//   arr.forEach((value, index) => {
//     if (arr.indexOf(value) !== index && !newArr.includes(value))
//       newArr.push(value);
//   });
//   return newArr;
// };

// console.log(findDublicatesInArrays(array));

// ******************************

// ! 4. Write a JavaScript program that square the value of every element in the array.

// ? Example: input = [1, 2, 3, 4, 5] => output = [1, 4, 9, 16, 25]

// const array = [1, 2, 3, 4, 5];

// const squares = arr => {
//     const newArr = [];
//     arr.forEach(number => newArr.push(number ** 2));
//     return newArr;
//   return arr.map(number => number ** 2);
// };

// console.log(squares(array));

// const words = ['car', 'elephant', 'desert', 'pumpkin', 'eat', 'fish', 'dish'];

// const html_elements = words.map(item => `<li>${item}</li>`);

// console.log(html_elements);

// ******************************

// ! 5. he given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// ? Example: input = "George Raymond Richard Martin" => output = "GRRM"

// const name = 'George Raymond Richard Martin';

// const initials = str => {
//   const newArr = str.split(' ');
//   return newArr.map(word => word[0]).join('');
// };

// console.log(initials(name));

// console.log(name.replace(/[^A-Z]/g, ''));
