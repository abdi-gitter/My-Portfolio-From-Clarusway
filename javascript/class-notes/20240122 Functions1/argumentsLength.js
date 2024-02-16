const c = 5

function add(a = 0, b = 0){

    console.log(`${arguments.length} arguments were passed to the function.`)
    
    switch(arguments.length){
        case 1:
            return a + c;
        case 2:
            return a+b+c;
        default:
            return c;
    }
}

console.log("calling function:")
console.log(add(1,2))