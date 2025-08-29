'use strict';

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document
  .querySelector('.nav__link')
  .addEventListener('click', function (event) {
    console.log('Link', event.target);
    this.style.backgroundColor = randomColor();

    // event.stopPropagation();
  });
document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    console.log('Links');
    this.style.backgroundColor = randomColor();
  });
document.querySelector('.nav').addEventListener(
  'click',
  function (event) {
    console.log('Nav');
    this.style.backgroundColor = randomColor();
  }
  // true
);
