// We use the word parameter when referring to a function declaration/definition/expression
// let's create a function that has 2 parameters.  This function will multiply the first number
    // by the second number and return the result

function multiply(num1, num2){
    // let num1 = VALUE1
    // let num2 = VALUE2

    return num1 * num2
}

// Now let's call the function and pass in 2 arguments
// Once I call the function and assign values to the parameters, we actually
// call these ARGUMENTS
multiply(5,10) // SAME AS the literal value: 50

const fifty = multiply(5,10) // SAME AS the literal value: 50

console.log(
    multiply(
        multiply(2,2), // 4
        multiply(5,5) // 25
        ) // 100
    )// log 100

console.log(multiply(multiply(2,2), multiply(5,5))) // log 100

// PARAMETERS are variables, ARGUMENTS are values

// We use the word argument when referring to a function call (using the function)