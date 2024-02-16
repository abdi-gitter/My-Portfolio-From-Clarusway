'use strict';
//! hoisting: any declaration moved to top
//! var and function declarations are hoisted
x = 10;
console.log(x);

var x;

greet();

function greet() {
  console.log('Hello');
}

//! let and const defined variables can not be used before declaration line
// a = 15;
// console.log(a);
// let a;

//! with var keyword we can define same variable again and again and it is very dangerous
var table = 10;

console.log(table);

// var tabel = 15
var table = 15;

// let cat = 20;
// let cat = 35;

//! Dangerous thing for variables: without using any variable declaration keyword we can still define variables
//? to stop it use "use strict" keyword at top of your code
// xxx = 20;
// console.log(xxx);
