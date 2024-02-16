// IIFE, immediately invoked function expression

function dosomething(){
    console.log("something")
}

// using arguments/parameters
const result = (function(num){
    return num * 2
})(5)

// es6 arrow function as IIFE
const result2 = (num=>num*2)(5)

console.log(result)
