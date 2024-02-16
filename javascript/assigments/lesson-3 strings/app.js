// JS assignment:
// 1. Write a JavaScript code to convert a string into an abbreviated form.
// Example-1: input = “John Doe”  => output= "John D."
// Example-2: input = “John”  => output= "John"
// Example-3: input = “John Doe Marcus”  => output= "John D."

//! solution-1: spliting the words
// const input = 'John Doe Jane Smith';
// // console.log(input.split()); // ["John Doe"]
// // console.log(input.split('')); // ['J', 'o', 'h', 'n', ' ', 'D', 'o', 'e' ]
// console.log(input.split(' ')); // ["John", "Doe"]
// const arr = input.split(' ');
// let result;

// if (arr.length > 1) {
//   result = arr[0] + ' ' + arr[1][0] + '.';
//   //             John           D
// } else {
//   result = arr[0];
// }

// console.log(result);

//! solution-2: search for space
// const input = 'John Doe';
// const position = input.indexOf(' ');
// console.log(position);
// let result;
// // console.log(input.slice(0, position + 2) + '.');
// if (position !== -1) {
//   result = input.slice(0, position + 2) + '.';
// } else {
//   result = input;
// }

// console.log(result);

// JS assignment:
// 2. Write a JavaScript code to hide email addresses to protect them from unauthorized users. Hint: Just display half of the characters before the @ sign in the email address
// Example: input = "nurettin@clarusway.com" => output = "nure*****@clarusway"

// //! find the position of @ sign
// const input = 'abcdefg@clarusway.com';
// const pos = input.indexOf('@');
// console.log(pos);
// let result = '';

// for (let i = 0; i < pos; i++) {
//   if (i < pos / 2) {
//     result += input[i];
//   } else {
//     result += '*';
//   }
// }

// result += input.slice(pos);
// console.log(result);

// JS assignment:
// 3. Write a JavaScript code to convert a string into a title format (The first letters of each word should be in capital letters)
// Example: input = 'CLARUSWAY is a bOoTcAmP' => output = "Clarusway Is A Bootcamp"

const example =
  'Write a JavaScript code to convert a string into a title format';

//! convert into words array
const arr = example.toLowerCase().split(' ');
console.log(arr);

//! loop over array and capitalize first letter of every item
for (let i = 0; i < arr.length; i++) {
  const word = arr[i];
  const newWord = word[0].toUpperCase() + word.slice(1);
  arr[i] = newWord;
  // console.log(word, newWord);
}

console.log(arr);
const result = arr.join(' ');
console.log(result);
