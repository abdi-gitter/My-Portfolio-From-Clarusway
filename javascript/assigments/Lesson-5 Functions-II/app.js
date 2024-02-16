console.log('***** Functions *****');

// ! 1. Write a function to find the count of a specific letter in a string

// ? Example: input=("Connect",c) => output=2
// ? Example: input=("first person",s) => output=2

// const charCounter = (str, chr) => {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() === chr.toLowerCase()) counter++;
//   }
//   return counter;
// };

// console.log(charCounter('Connect', 'c'));

// ******************************

// ! 2. Write a function to convert Celsius to Fahrenheit or Fahrenheit to Celsius according to the input.

// ? Example - 1: input=(20, "C") => output="68F"
// ? Example - 2: input=(104, "F")=> output="40C"

// const converter = (deg, unit) => {
//   if (Number(deg)) {
//     if (unit.toLowerCase() === 'c') {
//       return (deg * 9) / 5 + 32;
//     } else if (unit.toLowerCase() === 'f') {
//       return ((deg - 32) * 5) / 9;
//     } else {
//       return 'Enter a valid unit: C/F';
//     }
//   } else {
//     return 'Enter a number for degree';
//   }
// };

// console.log(converter(20, 'C'));
// console.log(converter(104, 'F'));
// console.log(converter(104, 'K'));
// console.log(converter('10a4', 'F'));

// ******************************

// ! 3. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.

// ? Example: input= (2, 3) => output=8

// function power(n, exp) {
//   let newNbr = 1;
//   for (let i = 1; i <= exp; i++) {
//     newNbr *= n;
//   }
//   return newNbr;
// }

// console.log(power(2, 4));

// ******************************

// ! 4. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

// ? Example: input=("Connect") => output="tonnecC"

// const changePosition = str => {
//   if (str.length === 1) {
//     return str;
//   } else {
//     const start = str[0];
//     const end = str[str.length - 1];
//     let middle = '';
//     for (let i = 1; i < str.length - 1; i++) {
//       middle += str[i];
//     }
//     const newStr = end + middle + start;
//     return newStr;
//   }
// };

// console.log(changePosition('function'));

// ******************************

// ! 5. Write a JavaScript function which returns the n rows by n columns identity matrix.

// ? Example: input = 4 => output=
// ? 1
// ? 0
// ? 0
// ? 0
// ?----------
// ? 0
// ? 1
// ? 0
// ? 0
// ?----------
// ? 0
// ? 0
// ? 1
// ? 0
// ?----------
// ? 0
// ? 0
// ? 0
// ? 1
// ?----------

// const matrix = n => {
//   for (let i = 0; i < n; i++) {
//     let column = '';
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         column += '1';
//       } else {
//         column += '0';
//       }
//     }
//     console.log(column);
//     console.log('----------');
//   }
// };

// matrix(4);
