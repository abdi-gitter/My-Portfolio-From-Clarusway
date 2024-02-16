const img = document.querySelector('img');
const div = document.querySelector('div');

img.addEventListener('load', (e) => {
  console.log('image loaded');

  div.style.border = '3px solid red';
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready');
});
