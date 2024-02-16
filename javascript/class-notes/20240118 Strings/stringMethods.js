// STRING METHODS!

// .toUpperCase()
// This will return a string with all uppercase letters.
let lowerStr = "lowercase letters!"
console.log(lowerStr.toUpperCase()) // LOWERCASE LETTERS!

// .toLowerCase()
// This will return a string with all lowercase letters.
let upperStr = "UPPERCASE LETTERS!"
console.log(upperStr.toLowerCase()) // uppercase letters!

// ---------------------------------------------------------------
// --------------------- .SLICE() --------------------------------
// ---------------------------------------------------------------
// This will return a substring of the original string.
// It takes two arguments: the starting index and the ending index.
// your first index will be included in the substring, but the second index will not be included.
let sliceString = "This is a string."
console.log(sliceString.slice(0,4)) // This
// if we only provide one argument, it will start at that index and go to the end of the string:
console.log(sliceString.slice(5)) // is a string.
// I can also start at the end of the string and work backwards:
console.log(sliceString.slice(-7,-1)) // string
// When using a negative number, the first number must be smaller than the second number
// meaning, we still move from left to right.
// if I use a negative number for the starting index, it will start at the end of the string and work backwards.


// ---------------------------------------------------------------
// --------------------- .SUBSTRING() ----------------------------
// ---------------------------------------------------------------
// This will return a substring of the original string.
// It takes two arguments: the starting index and the ending index.
// your first index will be included in the substring, but the second index will not be included.
// If you provide a negative number, it will be treated as 0.
// If our first argument is larger than our second argument, they will be swapped.
let orange = "Orange"
console.log(orange.substring(1,4)) // ran

// ---------------------------------------------------------------
// -------------------- CONCATENATION ----------------------------
// ---------------------------------------------------------------
// This is the process of combining strings together.
let str1 = "Hello"
let str2 = "World"
let str3 = "!"

// We can use the + operator to concatenate strings:
console.log(str1 + " " + str2 + " " + str3) // Hello World !

// We can also use the += operator to concatenate strings:
// When we use += with strings, it just adds to the end of the string.
str1 += " " + str2 + " " + str3
console.log(str1) // Hello World !

// reset str1:
str1 = "Hello"

// backticks are the best way to concatenate strings:
console.log(`${str1} ${str2} ${str3}`) // Hello World !

// .concat() method:
// the concat method will concatenate strings together.
// it takes any number of arguments.
console.log(str1.concat(" ",str2," ",str3)) // Hello World !


// ---------------------------------------------------------------
// --------------------- .INCLUDES() -----------------------------
// ---------------------------------------------------------------
// This will return a boolean value if the string contains the substring.
// usage: string.includes(substring)
// It is case sensitive.
let msg = "Hello World!"
console.log(msg.includes("world"))// false
console.log(msg.includes("World"))// true
// sometimes we want to ignore case when we are checking if a string contains a substring:
console.log(msg.toLowerCase().includes("world")) // true
// this will return true because we are converting the string to lowercase before checking if it includes the substring.


// ---------------------------------------------------------------
// --------------------- .INDEXOF() ------------------------------
// ---------------------------------------------------------------
// This will return the index of the first occurrence of a substring.
// a substring could be a single character or a series of characters.
// THIS IS ALSO CASE SENSITIVE!
// usage: string.indexOf(substring)
// This is going to tell us where the substring starts!
let str4 = "Hi, my name is Chase."
console.log(str4.indexOf("Chase")) // 15
// This will return -1 if the substring is not found.
console.log(str4.indexOf("Abdisa")) // -1

// A useful use case for indexOf is checking if a string contains a substring:
if(str4.indexOf("Chase")>-1){
    console.log("Chase is in the string.")
}else{
    console.log("Chase is not in the string.")
}

// We can also start at a specific index by providing a second argument:
console.log(str4.indexOf("i",2)) // 12
// Above, we are starting at index 2, and searching for the first occurrence of "i" after index 2.
// Meaning we want to find the next "i" after the "i" in "hi"

// ---------------------------------------------------------------
// --------------------- .LASTINDEXOF() --------------------------
// ---------------------------------------------------------------
// This will return the index of the last occurrence of a substring.
// a substring could be a single character or a series of characters.
// THIS IS ALSO CASE SENSITIVE!
// usage: string.lastIndexOf(substring)
// This is going to tell us the index where the LAST substring starts!
let str5 = "Hi, my name is Chase.  Chase is my name."
console.log(str5.lastIndexOf("Chase")) // 23


// ---------------------------------------------------------------
// --------------------- REGEX EXAMPLE ---------------------------
// ---------------------------------------------------------------

function isValidUSAPhoneNumber(phoneNumber) {
    // Define the regex pattern for USA phone numbers
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  
    // Test the provided phone number against the pattern
    return phonePattern.test(phoneNumber);
  }
  
  // Example usage:
  const phoneNumber1 = '(123) 456-7890';
  const phoneNumber2 = '555-1234';
  
  console.log(isValidUSAPhoneNumber(phoneNumber1)); // Output: true
  console.log(isValidUSAPhoneNumber(phoneNumber2)); // Output: false

// ---------------------------------------------------------------
// --------------------- str.SEARCH() ----------------------------
// ---------------------------------------------------------------
// This will return the index of the first occurrence of a substring.
// a substring could be a single character or a series of characters.
// THIS IS ALSO CASE SENSITIVE!
// usage: string.search(substring)
// This is going to tell us where the substring starts!
let str6 = 'You do not KNOW what you do not know until you know.'

console.log(str6.search('know')) // 32
console.log(str6.search('Know')) // -1
console.log(str6.search('KNOW')) // 11
// regex:
console.log(str6.search(/know/i)) // 11
console.log(str6.search(/know/)) // 32

// SIMILARITIES AND DIFFERENCES BETWEEN INDEX OF AND SEARCH!!!
// indexOf will not accept a regex as an argument.
// search will accept a regex as an argument.
// indexOf will return -1 if the substring is not found.
// search will return -1 if the substring is not found.
// indexOf will return the index of the first occurrence of the substring.
// search will return the index of the first occurrence of the substring.
// indexOf is case sensitive.
// search is case insensitive if you provide the i flag.
// Search can not start at a specific index.

// ---------------------------------------------------------------
// --------------------- str.REPLACE() ---------------------------
// ---------------------------------------------------------------
// This will replace a substring with another substring.
// This is the only way to modify a string in javascript.
// usage: string.replace(substring, newSubstring)
// This will only replace the first occurrence of the substring.
// We CAN use a regex as the first argument.
let str7 = "Goodbye World!"
console.log(str7.replace("Goodbye", "Hello")) // Goodbye World!

// ---------------------------------------------------------------
// --------------------- str.REPLACEALL() ------------------------
// ---------------------------------------------------------------
// This will find EVERY occurrence of a substring and replace it with another substring.
// usage: string.replaceAll(substring, newSubstring)
let str8 = "hello goodbye hello goodbye hello goodbye"
console.log(str8.replaceAll("goodbye", "hello")) // hello hello hello hello hello hello

// ---------------------------------------------------------------
// --------------------- str.SPLIT() -----------------------------
// ---------------------------------------------------------------
// This will split a string into an array of substrings.
// We have to use a separator to tell javascript on which substring to split the string.
// this separator can be a single character or a series of characters.
// It will remove the separator from the string, and the separator will not make it into the array.
// usage: string.split(separator)
// This value is no longer a string, but an array of strings.

let str9 = 'Hello, I am writing a long string to demonstrate how to use the split method.'
const strArray = str9.split(' ')
console.log(strArray) // [ 'Hello,', 'I', 'am', 'writing', 'a', 'long', 'string', 'to', 'demonstrate', 'how', 'to', 'use', 'the', 'split', 'method.' ]

// ---------------------------------------------------------------
// --------------------- str.JOIN() ------------------------------
// ---------------------------------------------------------------
// This will join an array of strings together into a single string.
// We have to use a joiner to tell javascript how to join the strings together.
// This joiner can be a single character or a series of characters.
// usage: array.join(joiner)
// This value is no longer an array, but a string.
console.log("-------JOIN-------")
console.log(strArray.join(' '))
console.log('-------JOIN-------')

// ---------------------------------------------------------------
// --------------------- str.TRIM() ------------------------------
// ---------------------------------------------------------------
// This will remove all whitespace from the beginning and end of a string.
// usage: string.trim()
let str10 = "     Hello World!     "
console.log(str10.trim()) // Hello World!


// ---------------------------------------------------------------
// --------------------- str.STARTSWITH() ------------------------
// ---------------------------------------------------------------
// This will return a boolean value if the string starts with the provided substring.
// usage: string.startsWith(substring)
// This is case sensitive.
let str11 = "Hello World!"
console.log(str11.startsWith("Hello")) // true

// we can also provide a second argument to tell javascript where to start checking:
console.log(str11.startsWith("World",6)) // true


// ---------------------------------------------------------------
// --------------------- str.ENDSWITH() --------------------------
// ---------------------------------------------------------------
// This will return a boolean value if the string ends with the provided substring.
// usage: string.endsWith(substring)
// This is case sensitive.
let str12 = "Hello World!"
console.log(str12.endsWith("World!")) // true

// we can also provide a second argument to tell javascript where to stop checking:
console.log(str12.endsWith("Hello",5)) // true

// ---------------------------------------------------------------
// --------------------- Method chaining -------------------------
// ---------------------------------------------------------------
// because ALMOST all of these methods return a string, 
// we can call another method on the result infinitely AS LONG AS THE METHOD RETURNS A STRING.
// This is called method chaining.

let str13 = "Hello World!"

// crazy big method chain:
console.log(str13.replace("Hello", "Goodbye").toUpperCase().split(" ").join(" ").trim().startsWith("GOODBYE")) // true