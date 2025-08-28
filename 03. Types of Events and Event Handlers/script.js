'use strict';

const h1 = document.querySelector('h1');
const alertH1 = function (event) {
  alert('You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
