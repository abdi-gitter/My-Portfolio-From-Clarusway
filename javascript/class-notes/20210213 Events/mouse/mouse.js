const div = document.querySelector('.box');
const para = document.querySelector('p');

div.addEventListener('click', () => {
  console.log('Clicked');
});

div.addEventListener('dblclick', () => {
  console.log('Double clicked');
});

div.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('Copyright protection and disabled');
  console.log('Right click');
});

document.body.addEventListener('copy', (e) => {
  e.preventDefault();
  alert('Copying is not allowed!');
});

div.addEventListener('mouseenter', () => {
  console.log('Mouse enter');
  para.innerHTML = 'Mouse is in the box';
});

div.addEventListener('mouseout', () => {
  console.log('Mouse out');
  para.innerHTML = 'Mouse is out of the box';
});

div.addEventListener('mouseover', () => {
  console.log('Mouse over');
  para.innerHTML = 'Mouse over';
});
