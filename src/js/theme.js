import localStorage from './localStorage.js';
console.log(localStorage);

const switchTheme = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// console.log(switchTheme);

switchTheme.addEventListener('change', bodyColor);

function bodyColor(e) {
  const inputCheckbox = e.target.checked;
  console.log(inputCheckbox);
  if (inputCheckbox) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
}

switchTheme.addEventListener('change', handleChange)

let isChecked = localStorage.load('Theme');
isChecked = JSON.parse(isChecked);
console.log('isChecked', isChecked);

if (isChecked) {
  body.classList.add(Theme.DARK);
  switchTheme.checked = isChecked;
}

function handleChange(e) {
    const isChecked = e.target.checked;
    // console.log(isChecked);

    localStorage.save('Theme', isChecked);
}