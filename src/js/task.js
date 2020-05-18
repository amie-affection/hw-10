// Реализуй функционал изменения темы при нажатии(событие change)
// на чекбокс input.js -switch-input в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс
// light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы.
// Для хранения активной темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса input.js -switch-input в true,
// чтобы ползунок сдвинулся в правильное положение.

import list from '../menu.json';
import templateItem from '../templates/menu-items.hbs';

// console.log(list);
// console.log(templateItem);

const markup = templateItem(list[1]);

// console.log(markup);

const refs = {
    foodItem: document.querySelector('.js-menu')
}


function buildFoodList(list) {
    const markup = list.map(item => templateItem(item)).join('');
    
    // console.log(markup);
    
    refs.foodItem.insertAdjacentHTML('beforeend', markup);
}

buildFoodList(list)