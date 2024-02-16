const form = document.getElementById('form');
const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Submit happened');

  const username = usernameElm.value;
  const password = passwordElm.value;

  //   usernameElm.value = '';
  //   passwordElm.value = '';

  form.reset();

  console.log(username);
  console.log(password);
});

// form.addEventListener('reset', () => {
//   alert('Form reset');
// });

// keypress - keydown - keyup
usernameElm.addEventListener('keydown', (e) => {
  console.log(e);
  console.log(e.code);
  console.log(e.key);
});

passwordElm.addEventListener('change', (e) => {
  console.log(e.target.value);
});
