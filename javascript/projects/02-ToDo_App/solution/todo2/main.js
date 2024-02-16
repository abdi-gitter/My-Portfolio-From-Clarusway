const addButton = document.querySelector('nav button');
const cancelButton = document.querySelector('#overlay button[type="reset"]');

const form = document.querySelector('#overlay form');
const container = document.getElementById('tasks');

addButton.addEventListener('click', showModal);
cancelButton.addEventListener('click', closeModal);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit happened');
  const input = document.querySelector('#overlay input');
  console.log(input.value);

  //   const html = `
  //   <div class="task" id="task-1698951526061" style="background: white">
  //     <input type="checkbox" class="check" />
  //     <div class="task-details">
  //         <h3 class="task-title">${input.value}</h3>
  //         <small> 11/2/2023</small>
  //     </div>
  //     <div class="actions">
  //         <button><i class="fa-solid fa-pen-to-square"></i></button>
  //         <button class="delete-btn">
  //             <i class="fa-solid fa-trash"></i>
  //         </button>
  //     </div>
  //   </div>`;

  const div = document.createElement('div');
  div.classList.add('task');
  div.style.backgroundColor = 'white';
  div.innerHTML = `
     <input type="checkbox" class="check" />
     <div class="task-details">
         <h3 class="task-title">${input.value}</h3>
         <small> 11/2/2023</small>
     </div>
     <div class="actions">
         <button><i class="fa-solid fa-pen-to-square"></i></button>
         <button class="delete-btn">
             <i class="fa-solid fa-trash"></i>
         </button>
     </div>
  `;

  // container.innerHTML += html;
  container.appendChild(div);

  closeModal();
  input.value = '';

  updateStatus();
});

function showModal() {
  // display the modal
  // make a connection with that modal
  const modal = document.getElementById('overlay');
  // add show class
  modal.classList.add('show');
  // remove hide class
  modal.classList.remove('hide');
}

function closeModal() {
  // hide the modal
  // make a connection with that modal
  const modal = document.getElementById('overlay');
  // add hide class
  modal.classList.add('hide');
  // remove show class
  modal.classList.remove('show');
}

container.addEventListener('click', (e) => {
  console.log(e.target);
  if (
    e.target.classList.contains('delete-btn') ||
    e.target.classList.contains('fa-trash')
  ) {
    console.log('ready to delete');
    if (e.target.classList.contains('delete-btn'))
      e.target.parentElement.parentElement.remove();
    else e.target.parentElement.parentElement.parentElement.remove();
  }

  if (e.target.classList.contains('check')) {
    console.log('checked clicked');
    e.preventDefault();
    if (e.target.parentElement.style.backgroundColor === 'lightgreen') {
      e.target.parentElement.style.backgroundColor = 'white';
    } else e.target.parentElement.style.backgroundColor = 'lightgreen';
  }

  updateStatus();
});

function updateStatus() {
  const allTasks = document.getElementsByClassName('task');
  // const allTasks = document.querySelectorAll('.task');
  console.log(allTasks);
  const totalTasks = allTasks.length;
  console.log(totalTasks);
  const iconTotal = document.querySelector('.fa-chart-simple');
  const pTagTotal = iconTotal.previousElementSibling;
  pTagTotal.textContent = totalTasks;

  let incompletedTasks = 0;
  for (let i of allTasks) {
    console.log(i.style.backgroundColor);
    if (i.style.backgroundColor === 'white') incompletedTasks++;
  }

  const iconIncompleted = document.querySelector('.fa-clipboard-list');
  const pTagIncompleted = iconIncompleted.previousElementSibling;
  pTagIncompleted.textContent = incompletedTasks;

  document.querySelector(
    '.fa-circle-check'
  ).previousElementSibling.textContent = totalTasks - incompletedTasks;
}

updateStatus();
