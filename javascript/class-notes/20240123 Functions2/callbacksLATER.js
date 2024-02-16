// higher order functions are functions that take other functions as arguments!
// a callback is a function that is passed into another function as an argument

function one(val){
    // log that we're starting an async process
    console.log('Starting process 1')

    // imagine this is a database call:
    setTimeout(function(){
        console.log(val)
        console.log('Process 1 complete')
    }, 1000)
}

function two(val){
    console.log('Starting process 2')
    setTimeout(function(){
        console.log(val)
        console.log('Process 2 complete')
    }, 2000)
}

function main(message, one, two){
    two(message + message)
    one(message)
}

main('hello', one, two)

console.log("How are we here first !?!??")

for(let i = 0; i< 100000; i++){
    console.log(i)
}

console.log('do something else')