console.log('DOM');

// ! 1.Write a div that has a button to change its background every time it's clicked.

const colorDiv = document.getElementById('bg');
const colorBtn = document.getElementById('color-btn');

const colors = ['yellow', 'green', 'red', 'blue', 'purple'];
let counter = 0;

// const changeBG = () => {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   colorDiv.style.backgroundColor = colors[randomIndex];
// };

// colorBtn.addEventListener('click', changeBG);

colorBtn.addEventListener('click', () => {
  if (counter < colors.length - 1) {
    colorDiv.style.backgroundColor = colors[++counter];
  } else {
    counter = 0;
    colorDiv.style.backgroundColor = colors[counter];
  }
});

// ********************

// ! 2. Write an input field that checks if the entered sentence is a palindrome or not.

const palindromeBtn = document.getElementById('palindrome-btn');
const palindromeInput = document.getElementById('palindrome-input');
const palindromeMessage = document.getElementById('palindrome');

function checkPalindrome(str) {
  return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}

palindromeBtn.addEventListener('click', () => {
  let enteredMessage = palindromeInput.value;
  //! let array = enteredMessage.toLowerCase().split('');
  //! let reversedArray = array.reverse();
  console.log(enteredMessage, checkPalindrome(enteredMessage));
  if (checkPalindrome(enteredMessage)) {
    palindromeMessage.innerText = 'It is a palindrome';
  } else {
    palindromeMessage.innerText = 'It is not a palindrome';
  }
});

// ********************

// ! 3.Write a div that has a button to display a random password on a screen.

const passwordBtn = document.getElementById('password-btn');
const passwordRes = document.getElementById('password');

const chars = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];

passwordBtn.addEventListener('click', () => {
  let password = '';
  for (let i = 0; i < 8; i++) {
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  passwordRes.innerText = password;
});

// ********************

// ! 4. Write a div that has a functioning counter inside btn increment and decrement 1 or 5 values buttons

const counterText = document.getElementById('counter');
const buttons = document.getElementById('buttons');

let count = 0;

buttons.addEventListener('click', event => {
  // const innerText = event.target.innerText;
  // if (innerText === '+5') {
  //   count += 5;
  // } else if (innerText === '+1') {
  //   count += 1;
  // } else if (innerText === '-1') {
  //   count -= 1;
  // } else if (innerText === '-5') {
  //   count -= 5;
  // }
  count = count + event.target.innerText;
  counterText.innerText = eval(count);
});
