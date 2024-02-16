const btnOK = document.getElementById('ok');
// const btnReset = document.getElementById("reset")
const btnReset = document.querySelector('#reset');
const btnNew = document.getElementById('new');

function eventHandler(event) {
  console.log('Button clicked');
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.target.id);
  console.log(event.target.classList);
  console.log(event.target.tagName);

  if (event.target.id === 'new') {
    console.log('You clicked new button');
    event.target.textContent = 'Done';
    event.target.style.color = 'red';
  }

  if (event.target.id === 'reset') {
    console.log('You clicked reset button');
    event.target.textContent = 'Undo';
    event.target.style.color = 'green';
  }
}

btnOK.addEventListener('click', eventHandler);
btnReset.addEventListener('click', eventHandler);
btnNew.addEventListener('click', eventHandler);

// make a connection with button
const onOff = document.getElementById('on-off');

function tooggleOnOff(e) {
  console.log('Button clicked');

  if (e.target.textContent === 'ON') {
    e.target.textContent = 'OFF';
    // e.target.classList.add('btn');
    e.target.classList.remove('btn-danger');
    e.target.classList.add('btn-primary');

    // e.target.style.backgroundColor = 'red';
  } else {
    e.target.textContent = 'ON';
    // e.target.classList.add('btn');
    e.target.classList.remove('btn-primary');
    e.target.classList.add('btn-danger');
    // e.target.style.backgroundColor = 'blue';
    // e.target.remove();
  }
}

onOff.addEventListener('click', tooggleOnOff);

const btn1 = document.querySelectorAll('.test')[0];
const btn2 = document.querySelectorAll('.test')[1];
console.log(btn1);
console.log(btn2);

btn1.addEventListener('click', function () {
  console.log('Hello btn 1');
});

btn2.addEventListener('click', () => {
  console.log('Hello btn-2');
});
