'use strict';

const root = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const listItems = numbers.map((number) => `<li>${number}</li>`);

const ul = document.createElement('ul');
      ul.innerHTML = listItems.join('');

root.append(ul);
