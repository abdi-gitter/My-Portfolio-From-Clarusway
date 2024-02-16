console.log('***** Objects *****');

// ******************************

// ! 1. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// ? Example: input = const numbers = [1, -4, 12, 0, -3, 29, -150] => output = 42

// const numbers = [1, -4, 12, 0, -3, 29, -150];

// const positivesAddUp = arr => {
//   return arr
//     .filter(num => num > 0)
//     .reduce((acc, currentValue) => {
//       console.log(acc);
//       console.log(currentValue);
//       console.log('-------');
//       return acc + currentValue;
//     }, 0);
// };

// console.log(positivesAddUp(numbers));

// ******************************

// ! 2. Write a JS code that calculates the average of scores that students took in a math class below.

// ? Example: input = const scores = {  Mary: 85,  Susan: 75,  Barry: 65,  Alexis: 88,  Jane: 45,  Tina: 100,  Tom: 90,  Tim: 60,}  => output = 76

// const scores = {
//   Mary: 85,
//   Susan: 75,
//   Barry: 65,
//   Alexis: 88,
//   Jane: 45,
//   Tina: 100,
//   Tom: 90,
//   Tim: 60,
// };

// const averageGrade = obj => {
//   const grades = Object.values(obj);
//   console.log(grades);
//   const sum = grades.reduce((acc, num) => acc + num, 0);
//   console.log(sum);
//   const average = sum / grades.length;
//   return average;
// };

// console.log(averageGrade(scores));

// ******************************

// ! 3. Write a JS code to display the repetition number of each character in a string.

// ? Example: input = "www.clarusway.com" => output = {'w': 4, '.': 2, 'c': 2, 'l': 1, 'a': 2, 'r': 1, 'u': 1, 's': 1, 'y': 1, 'o': 1, 'm': 1}

// const text = 'www.clarusway.com';

// const letterCounter = str => {
//   const letters = str.split('');
//   console.log(letters);
//   const letterCounts = letters.reduce((acc, letter) => {
//     if (acc[letter]) {
//       acc[letter]++;
//     } else {
//       acc[letter] = 1;
//     }
//     acc[letter] ? acc[letter]++ : (acc[letter] = 1);
//     return acc;
//   }, {});
//   return letterCounts;
// };

// console.log(letterCounter(text));

// ******************************

// ! 4. Write a JS code to find the numbers that are greater than 150 in the text below, and sort these numbers.

// ? Example: input= 'Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.' => output= [167, 1976, 1981]

// const text =
//   'Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.';

// const checkAndSortNum = str => {
//   const values = str.split(' ');
//   console.log(values);
//   const numbers = [];
//   values.forEach(element => {
//     if (!isNaN(element)) {
//       numbers.push(element);
//     }
//   });
//   return numbers.filter(num => num > 150).sort((a, b) => a - b);
// };

// console.log(checkAndSortNum(text));

// ******************************

// ! 5. Write a JS code that counts how many vowels and constants a string has that a user entered.

// ? Example : input = "Write a JS code that counts how many vowels and constants a string has that a user entered"=> output= "This string has 25 vowels and 48 consonants"

const text =
  'Write a JS code that counts how many vowels and constants a string has that a user entered';

const Vowels = ['A', 'E', 'I', 'O', 'U'];
const Consonants = [
  'B',
  'C',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'M',
  'N',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const countVovelsAndCons = str => {
  const letters = str.split('');
  console.log(letters);
  const result = letters.reduce(
    (acc, letter) => {
      if (Vowels.includes(letter.toUpperCase())) {
        acc.vowels += 1;
      } else if (Consonants.includes(letter.toUpperCase())) {
        acc.constants += 1;
      }
      return acc;
    },
    {
      vowels: 0,
      constants: 0,
    }
  );
  console.log(result);
  return `This string has ${result.vowels} vowels and ${result.constants} consonants`;
};

console.log(countVovelsAndCons(text));
