const a = `This is a string.`

// the different ways we can "wrap" strings are:
    // single quotes '
    // double quotes "
    // backticks `

// logging a variable to the console:
console.log(a)

// logging a string LITERAL to the console:
console.log(`This is a string`)
// number literal:
console.log(7)
// boolean literal:
console.log(true)
// array literal:
console.log([1,2,3])
// object literal:
console.log({a:1,b:2,c:3})

// LENGTH PROPERTY:
console.log(a.length)
// (This is a string)
// >> 16

console.log("length of string literal:")
console.log("This is a string.".length)

// The length of an empty string is 0!
if(a.length>0){console.log("a is not empty")}else{console.log("a is empty")}

// INDEXING:
console.log(a[0])
console.log(a.length)
// This will log the last character (index) in the string:
console.log(a[a.length-1])
// This is the same as me writing: console.log(a[16])

// Strings are immutable:
let b = "This is a string."
b[0] = "t"
console.log(b)
// We can not change a single character in a string.
// We can only reassign the entire string:
b = "THIS IS A STRING"
console.log(b)

// Escape characters/sequences:
console.log("This is a \"string\" ")
// storing a string with quotations:
console.log('This is a "string"')
console.log("This is a 'string'")

// BACKTICKS ARE AMAZING:
console.log(`This is a \\\\'''''''string'`)
// Backticks allow us to use single and double quotes without having to escape them.
// Backticks also allow us to use string interpolation or "template literals":
const c = 75.99
// to put a variable value into our string WHEN USING BACKTICKS, we use ${}
console.log(`The price of this item is: $${c} today.`)
// This is SO HELPFUL, because it's the same as writing:
// below is a concatenation example:
console.log("The price of this item is: $" + c + " today.")

// examples of escape sequences:
// \n = new line
console.log("This is a \nstring")
// \t = tab
console.log("This is a \tstring")
// \\ = backslash
console.log("This is a \\string")
// \b = backspace
console.log("This is a \bstring")
// \r = carriage return
console.log("This is a \rstring")
// \v = vertical tab
console.log("This is a \vstring")
// \f = form feed
console.log("This is a \fstring")
// \0 = null character
console.log("This is a \0string")

let d = "ANOTHER STRING!"
d = d.toLowerCase()
console.log(d)
console.log("ANOTHER STRING LITERAL...".toLowerCase())