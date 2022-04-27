'use strict';

///////////////////////////////////////
// Modal window

const outold = str => console.log(str);
outold("jeg er i script js");

const out = function (...str) {
  const arr1 = str;
  for (const obj of arr1) {
    let clsname = obj.__proto__;
    clsname = clsname.constructor;
    console.log(obj + '  , er af typen=' + typeof obj + ' , classname=' + clsname);
  }
};


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
