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

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export default { load, save };

switchTheme.addEventListener('change', handleChange)

let isChecked = localStorage.getItem('Theme');
isChecked = JSON.parse(isChecked);
console.log('isChecked', isChecked);

if (isChecked) {
    body.classList.add(Theme.DARK);
}

function handleChange(e) {
    const isChecked = e.target.checked;
    // console.log(isChecked);

    save('Theme', isChecked);
}