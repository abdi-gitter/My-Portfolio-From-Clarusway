// default parameters:
const mult = function(num1 = 1, num2 = 1){
    // let num1 = 1
    // let num2 = 1
    // num1 = 3
    // num2 = 4
    return num1 * num2
}

console.log(mult(3,4)) // > 12

const multiply = function(num1, num2){
    if(num1 == undefined || num2 == undefined){
        return `no arguments were passed to multiply function`
    }
    return num1 * num2
}

console.log(multiply(2,3))