document.getElementById('btn').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Button clicked');
});

document.getElementById('inner').addEventListener('click', () => {
  console.log('Inner Div clicked');
});

document.getElementById('outer').addEventListener('click', () => {
  console.log('Outer Div clicked');
});

document.body.addEventListener('click', () => {
  // console.log('Body is clicked');
});

const list = document.getElementById('list');

list.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.currentTarget);

  if (e.target.textContent === 'delete') {
    e.target.closest('li').remove();
    // e.target.parentElement.remove();
  }
});
