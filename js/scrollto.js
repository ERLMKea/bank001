out('jeg er i scrollto');

function doScrolling(evt, scroll) {
  const s3coords = section3.getBoundingClientRect();
  out(s3coords);

  out(evt);
  out(evt.target);
  out(pbGetScrolling.getBoundingClientRect());

  out('Current scroll (X/Y)');
  out(window.pageXOffset, window.pageYOffset);

  out('Hele skærmbillede/viewport');
  out(document.documentElement.clientHeight, document.documentElement.clientWidth);

  out(s3coords.left, s3coords.top);
  window.scrollTo(s3coords.left, 1500);

}

const section3 = document.querySelector('#section--3');
const pbGetScrolling = document.querySelector(".pbGetScroll");
const inpScrolling = document.getElementById("inpScrolling");
//pbGetScrolling.addEventListener('click', btn => doScrolling(btn, inpScrolling.value));

function sectionScroll(evt, section) {
  if (section == 1) {
    section1.scrollIntoView({behavior: 'smooth'});
  };
  if (section == 2) {
    section2.scrollIntoView({behavior: 'smooth'});
  };
  if (section == 3) {
    section3.scrollIntoView({behavior: 'smooth'});
  };
}

const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
//const section3 = document.querySelector('#section--3');

pbGetScrolling.addEventListener('click', btn => sectionScroll(btn, inpScrolling.value));





