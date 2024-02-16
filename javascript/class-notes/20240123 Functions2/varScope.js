function something(){
    // Notice when I use var, the variable is scoped to the funciton, not the block.
    // change the word var to let and see what happens with our final console log.
    for(var i = 0; i <= 10; i++){
        console.log(i)
    }

    console.log(i)
}

something()