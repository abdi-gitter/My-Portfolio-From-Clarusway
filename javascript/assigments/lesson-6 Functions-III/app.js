console.log('***** Functions *****');

// ******************************

// ! 1. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

// ? Example: input =  func(“Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.”, “the”)   => output= “Full stack developers handle both frontend and backend of an app or a website. It even needs to have knowledge about the database.”

// const firstOccurance = (str, word) => {
//     const position = str.search(word)
//     const newStr =str.slice(0, position) + str.slice(position + word.length).trim()
//     return newStr
//     const newStr =str.replace(word + " ", "")
//     return newStr
// }

// console.log(firstOccurance("Full stack developers handle both the frontend and backend of an app or a website. It even needs to have knowledge about the database.", "the"));

// ******************************

// ! 2. Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.

// ? Example: input =  '025468' => output = `0 - 254 - 6 - 8'

// const evenDash = (str) => {
//     let newNbrs = ""
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] % 2 === 0 && str[i + 1] % 2 === 0){
//             newNbrs += str[i] + "-"
//         } else{
//             newNbrs += str[i]
//         }
//     }
//     return newNbrs
// }

// console.log(evenDash("025468"))

// ******************************

// ! 3. Write a JavaScript program that accepts a string as input and swap the case of each character.

// ? Example: input = 'The Quick Brown Fox' => output = 'tHE qUICK bROWN fOX'

// const swapCase = (str) => {
//     let newStr = ""
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toUpperCase()){
//             newStr += str[i].toLowerCase()
//         } else {
//             newStr += str[i].toUpperCase()
//         }
//         newStr += str[i] === str[i].toUpperCase() 
//         ? str[i].toLowerCase() 
//         : str[i].toUpperCase()
//     }
//     return newStr
// }

// console.log(swapCase('The Quick Brown Fox'))

// ******************************

// 4. Write a JavaScript function to find the longest word in a given string. If there is two of the same length choose the first one.

// ? Example: input: "A silver brown fox jumps over the lazy dog" => output = "silver" 

// const findLonghest = (str) => {
//     const words = str.split(" ")
//     let longest = ""
//     for(let i = 0; i < words.length; i++) {
//         if(words[i].length > longest.length){
//             longest = words[i]
//         }
//     }
//     return longest
// }

// console.log(findLonghest("A silver brown fox jumps over the lazy dog"))

// ******************************

// 5. Write a JavaScript function to count the number of vowels in a given string. 

//Example: input:"Hello World" => output: 3 

// const countVowels = (str) => {
//     const vowels = "aeiou"
//     let count = 0
//     for(let i = 0; i < str.length; i++) {
//         if(vowels.includes(str[i].toLowerCase())){
//             count++
//         }
//     }
//     return count
// }

// console.log(countVowels("A quick brown fox jumps over the lazy dog"))