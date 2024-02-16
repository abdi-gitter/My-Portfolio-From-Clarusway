// calculator with higher order functions and callbacks!

// higher order function:
const calc = (n1, n2, op) => op(n1, n2)

// callback functions:
const add = (n1,n2) => n1 + n2
const sub = (n1,n2) => n1 - n2
const mult = (n1,n2) => n1 * n2
const div = (n1,n2) => n1 / n2

// intentionally throwing an error to demonstrate that we can pass any function we want
const err = ()=>{throw new Error('Invalid operation')}

// here, we will call our higher order function, passing the values and the callback function
// that we want to use to perform the specified operation and log it to the console.
console.log(calc(9, 3, div))
// console.log(calc(9, 3, err))

// Important vocabulary:
// Difference between a function reference and a function call:
// a function reference is a REFERENCE to a function
// a function call is the act of invoking (executing) a function