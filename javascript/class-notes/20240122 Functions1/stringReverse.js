// function to reverse a string!

function reverseStr(str){
    // return str reversed.
    let reversed = ""
    for(let i = str.length - 1; i>= 0; i--){
        // console.log(i)
        reversed += str[i]
    }

    return reversed
}

// using functions as arguments:
function log(string, fn){
    // when we assign a variable to an anonymous function:
    // let fn = function(str){return str}
    console.log(fn(string))
}

// Notice how when we use a function as an argument, we DONT CALL THE FUNCTION! : ()
// if we did, we would get an error, as we would be trying to run the function
// at the time we are passing it as an argument.
log("ahmed", reverseStr)
log("chase", reverseStr)
// passing an anonymous function as an argument
log("jacek", function(str){return str})
log("birsen", reverseStr)
log("abdisa", reverseStr)
log("kenneth", reverseStr)