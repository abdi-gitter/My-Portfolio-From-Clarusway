// IIFE stands for Immediately Invoked Function Expression
// It is a function that is executed right after it is created
// It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ()
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope
// The second part creates the immediately executing function expression ()
// The last () operator in the syntax causes the anonymous function to execute immediately
const c = 10
// This is just immediately invoking an anonymous function:
(function () {
    let a = 1
    let b = 2
    console.log(a+b+c)
})()

console.log(a) // a is not defined
console.log(b) // b is not defined

// some benefits of using IIFEs are:
// 1. You can avoid polluting the global scope
// 2. You can encapsulate code that must run immediately
// 3. You can pass in variables from the global scope
// 4. You can use it to avoid naming collisions
// 5. You can create private variables and functions
// 6. You can use it to create a block scope for your variables