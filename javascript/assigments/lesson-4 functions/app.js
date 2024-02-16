console.log('***** Functions *****');

// ******************************

// ! 1. Write a JavaScript function that accepts an argument and returns the type.

// ? Example - 1: input= 1 => output="That is a number"
// ? Example - 2: input= "a" => output="That is a string"

// const checkType = (value) =>{
//   const valueType = typeof value;
//   return valueType
// }

// const checkType = value => typeof value

// const input1 = 1
// const input2 = "a"

// console.log(checkType(input1))
// console.log(checkType(input2))

// ******************************

// ! 2. Write a JS code to display Perfect Numbers from 1 to 1000.
// ! A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// ! For instance, 6 has divisors 1, 2 and 3 (excluding itself), and 1 + 2 + 3 = 6, so 6 is a perfect number.

// ? Example - 1: input= 6 => output="6 is a Perfect Number"
// ? Example - 2: input= 10 => output="10 isn't a Perfect Number"

// const perfectNumbers = (n) => {
//   for(let i = 1; i <= n; i++){
//     let divisor = 0
//     for(let j = i -1; j > 0; j--){
//       if(i % j === 0){
//         divisor += j;
//       }
//     }
//     if (divisor === i) {
//       console.log(i + " is a Perfect Number")
//     }
//   }
// }

// perfectNumbers(1000)

// ******************************

// ! 3. Write a JavaScript function to extract a specified number of characters from a string.

// ? Example: input=func("Clarusway",6) => output="Clarus"

// const extractChr = (str, char) => {
//    let newWord = ""
//    for(let i = 0; i < char; i++) {
//      newWord += str[i]
//    }
//    return newWord
// }

// console.log(extractChr("Clarusway",6))

// ******************************

// ! 4. Develop a guessing game. Randomly generate a number between 0-100. Ask the user to guess that number.
// ! The user should have 5 chance to guess the number.
// ! If the number entered by the user:
// ! is greater than the random number then warn user to decrease,
// ! is less than the random number then warn user to increase,
// ! is equal to the random number then congratulate the user and tell in how many guesses were used to find the number
// ! If user can’t find the number in 5 guess then game is lost and display the random number.

// const guessingGame = () => {
//   let life = 5;
//   const winnigNumber = Math.floor(Math.random() * 100 + 1)
//   console.log(winnigNumber)
//   let guessedNumber;
//   do{
//     guessedNumber = Number(prompt("Enter a number between 1 to 100;"))
//     if(guessedNumber === winnigNumber){
//       console.log("Congrats you have found our number!")
//       break
//     } else {
//       console.log("You have " + (life - 1) + " number of lives")
//       if(guessedNumber > winnigNumber){
//         console.log("Guess lower")
//       } else {
//         console.log("Guess higher")
//       }
//     }
//     life = life - 1
//     console.log(guessedNumber)
//   } while(life > 0)
//   if(life === 0) {
//     console.log ("Sorry but you lost! Our number was: " + winnigNumber)
//   }
// }

// guessingGame()

// ******************************

// ! 5. Write a JavaScript function that generates a string id (specified length) of random characters.

// ? Example - 1: input=4 => output="A8Sf"
// ? Example - 2: input=8=> output="29SaBfgu"

const char_list =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// const passwordGenerator = (n) => {
//   let newPassword = "";
//   for(let i = 1; i <= n; i++){
//     let randomNumber = Math.floor(Math.random() * char_list.length)
//     newPassword += char_list[randomNumber] ;
//   }
//   return newPassword
// }

// console.log(passwordGenerator(8))

// ******************************

// ! 6. Write a function to find the area and perimeter of a Circle
// ! Perimeter is 2*pi*rad
// ! Area is pi*rad^2

// ? Example - 1: input= 10 => output="Perimeter: 62.83, Area: 314.15"
// ? Example - 2: input= 15 => output="Perimeter: 94.94, Area: 706.84"

// const circleValues = (rad) => {
//   const perimeter = 2 * Math.PI * rad;
//   const area = Math.PI * rad ** 2;
//   return (`Perimeter: ${perimeter.toFixed(2)}, Area: ${area.toFixed(2)}`);
// };

// console.log(circleValues(15))
