out('jeg er i events');

const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', e => alert('der er på h1'));

//jonas siger det her er old school
h1.onmouseenter = function (e) {
  alert('onmouseenter: denne event bliver tilføjet');
};

//med addEventListener kan man faktisk tilføje flere events til samme element.

function alert1(ev) {
  alert('jeg blev aktiveret på mouseenter');
}

//og fjerne, men her skal man angive en function. så ikke lambda
function fjernev(ev) {
  h1.removeEventListener('mouseenter', alert1);
}

setTimeout(() => h1.removeEventListener('mouseenter', alert1), 3000);

//kap190 capturing fase, bubling
