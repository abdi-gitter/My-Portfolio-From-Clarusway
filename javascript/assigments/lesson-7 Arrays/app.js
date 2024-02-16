console.log('***** Arrays *****');

// ******************************

// ! 1. Write a simple JavaScript program to join all elements of the following array into a string.

// ? Example: input =  ['Red', 'Green', 'White', 'Black']   => output= "Red,Green,White,Black"

// const array = ['Red', 'Green', 'White', 'Black'];

// const joinArrElm = arr => {
//     let string = '';
//     for (let i = 0; i < arr.length; i++) {
//       if (i === arr.length - 1) {
//         string += arr[i];
//       } else {
//         string += arr[i] + ', ';
//       }
//     }
//     return string;

//   return arr.join(', ');
// };

// console.log(joinArrElm(array));

// ******************************

// ! 2. Write a JavaScript program to sort the items of an array.

// ? Example: input = [-3, 8, 7, 6, 5, -4, 3, 2, 1]  => output = [-4, -3, 1, 2, 3, 5, 6, 7, 8]

// const array = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// const sortArr = arr => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//           let temp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = temp;
//         }
//       }
//     }
//     return arr;

//   return arr.sort((a, b) => a - b);
// };

// console.log(sortArr(array));

// ******************************

// ! 3. Write a JavaScript program to find the most frequent item of an array.

// ? Example: input = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] => output = "a is repeated most"

// const array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// const checkMostFrequent = arr => {
//   let mostFrequent;
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 1;
//     for (let j = arr.length - 1; j > i; j--) {
//       if (arr[i] === arr[j]) {
//         counter += 1;
//       }
//     }
//     if (counter > highest) {
//       highest = counter;
//       mostFrequent = arr[i];
//     }
//   }
//   return `Most frequent element in our array is ${mostFrequent} with ${highest} times`;
// };

// console.log(checkMostFrequent(array));

// ******************************

// ! 4. Given a list of numbers and a number k, return whether any two numbers from the list add up to k

// ? Example: input = [10, 15, 3, 7], k = 17 => output = true
// ? Example: input = [10, 15, 3, 7], k = 19 => output = false

// const array = [10, 15, 3, 7];
// const k = 20;

// const checkSum = (arr, num) => {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === num) {
//           return true;
//         }
//       }
//     }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.includes(num - arr[i]) && num - arr[i] !== arr[i]) {
//       console.log(i, arr[i]);
//       return true;
//     }
//   }
//   return false;
// };

// console.log(checkSum(array, k));

// ******************************

// ! 5. Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string
// ?    Example-1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  -->  ["ct", "mt", "tm", "uy"]
// ?    Example-2: showFirstAndLast(['hi', 'goodbye', 'smile']) -->  ['hi', 'ge', 'se']

// const array = ['colt', 'matt', 'tim', 'udemy', 'hi', 'goodbye', 'smile'];

// const showFirstAndLast = arr => {
//     let result = [];
//       for (let str of arr) {
//         result.push(str[0] + str[str.length - 1]);
//       }
//     arr.forEach(str => {
//       result.push(str[0] + str[str.length - 1]);
//     });
//     return result;
//   return arr.map(str => str[0] + str[str.length - 1]);
// };

// console.log(showFirstAndLast(array));
