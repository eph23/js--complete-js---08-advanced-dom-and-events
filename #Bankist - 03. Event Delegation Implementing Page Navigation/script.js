'use strict';

///////////////////////////////////////
/* ******************************************** */
/*ANCHOR:                Elements                */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/* ******************************************** */

/* ******************************************** */
/*ANCHOR:                     Modal                    */

const openModal = function (event) {
  event.preventDefault(event);

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* ******************************************** */

/* ******************************************** */
/*ANCHOR:                  Modal Buttons                  */

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* ******************************************** */

/* ******************************************** */
/*ANCHOR:                 Smooth Scroll                 */

btnScrollTo.addEventListener('click', function (event) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(event.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});
/* ******************************************** */

/* ******************************************** */
/*ANCHOR                PAGE NAVIGATION               */
/* document.querySelectorAll('.nav__link').forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
 */

document
  .querySelector('.nav__links')
  .addEventListener('click', function (event) {
    event.preventDefault();

    if (event.target.classList.contains('nav__link')) {
      const id = event.target.getAttribute('href');

      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
/* ******************************************** */
