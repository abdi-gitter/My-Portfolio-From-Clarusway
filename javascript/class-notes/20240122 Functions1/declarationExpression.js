//  function declaration:
// named function
// function declarations are hoisted!
log2times2();
// notice how we use the function keyword to declare our function
function log2times2(){
    console.log(2*2);
}

log2times2(); // 4

// function expression
// here, we assign a variable to an (anonymous) function
// notice how we do not use the function keyword to declare our function
// log3times3();
// we can not call a function expression before it is declared!
var log3times3 = function(){
    console.log(3*3);
}
log3times3(); // 9