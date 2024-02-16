// function expression:
// template strings:
// template strings are enclosed by backticks (``)
// we wrap our variables in ${} to interpolate them into our string
// interpolation is the act of inserting something into something else
const logString = function(str){
    return `The string is: ${str}`
}

console.log(logString("Hello World!")) // log "The string is: Hello World!"