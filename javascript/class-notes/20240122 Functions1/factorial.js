// write a function that calculates the factorial of a number:
// factorial(5) // >> 5! is 1 * 2 * 3 * 4 * 5, which is: 120
function factorial(num){

    if(isNaN(num)){
        return `${num} is not a number.`;
    }

    if(num < 0){
        return `${num} is less than zero.`;
    }

    if(num ==0){
        // empty return will just exit the function and not return a value;
        // if we try to use this as a value, we will get "undefined"
        return
    }

    let fact = ""
    let total = 1

    for(let i = 1; i <= num; i++){
        if(i==1){
            fact += `${i} `
        }
        else if(i > 1 && i < num){
            fact+= `* ${i} `
        }else{
            fact += `* ${i},`
        }

        total *= i
    }
    return `${num}! is ${fact} which is: ${total}`
    // console.log("Hi") This code will never happen
}

console.log(factorial(0))
console.log(factorial(-10))
console.log(factorial(-10 + 'hi'))
console.log(factorial(10))
