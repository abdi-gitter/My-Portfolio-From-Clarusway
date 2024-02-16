// if we only have 1 argument, we can omit the parenthesis
// if we are returning a simple value, we can omit the {} brackets and the return keyword.
const a = a => a*2

const b = function(b){
    return b*2
}

// If using multiple parameters, we need to use parenthesis
const abc = (a,b,c) => { console.log("whatever"); return a*b*c } 
// same as:
const abc2 = function(a,b,c){
    console.log("Whatever")
    return a*b*c
}

console.log("TEST")

// console.log(a(2))

// Arrow function to determine if a number is even or odd:
const eo = num => num % 2 == 0? 'even' : 'odd'

const oe = (num) => {
    return num % 2 == 0? 'even' : 'odd'
}

console.log(eo(10))