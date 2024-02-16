// make a connection with DOM element
const btn = document.getElementById('btn-file');

console.log(btn);

// define a function
function greet() {
  console.log('You clicked File Button!');
}

function greet2() {
  console.log('You clicked Listen Button!');
}

function hello1() {
  console.log('Hello 1');
  btnListen.removeEventListener('click', hello1);
}

function hello2() {
  console.log('Hello 2');
  btnListen.removeEventListener('click', hello2);
}

function hello3() {
  console.log('Hello 3');
}

btn.onclick = greet;

// grab DOM element
const btnListen = document.getElementById('btn-listen');
btnListen.addEventListener('click', greet2);
btnListen.addEventListener('click', hello1);
btnListen.addEventListener('click', hello2);
btnListen.addEventListener('click', hello3);
