// make a connection with dom elements
const inputTodo = document.getElementById('todo-input');
const btn = document.getElementById('btn-add');
const container = document.getElementById('list');

// event listener
btn.addEventListener('click', () => {
  // console.log('button clicked');
  // get the value of todo input
  console.log(inputTodo.value);
  const todo = inputTodo.value;
  // add the value of todo input to do list container

  const li = document.createElement('li');
  // li.textContent = todo;
  li.innerHTML = `${todo} <button class="btn-done">Done</button
  ><button class="btn-delete">Delete</button>`;
  container.appendChild(li);

  // reset the input
  inputTodo.value = '';
});

container.addEventListener('click', (e) => {
  console.log(e.target); // the DOM event which started the event
  // console.log(e.currentTarget); // currentTarget is the DOM Element you add the event listener
  //   if (e.target.textContent === 'Done') {
  //     console.log('Done is clicked');
  //   }
  console.log(e.target.classList);
  if (e.target.classList.contains('btn-done')) {
    console.log('Done is clicked');
    if (e.target.parentElement.style.textDecoration === 'line-through') {
      e.target.parentElement.style.textDecoration = '';
    } else {
      e.target.parentElement.style.textDecoration = 'line-through';
    }
  } else if (e.target.classList.contains('btn-delete')) {
    console.log('Delete is clicked');
    e.target.parentElement.remove();
  }
});
