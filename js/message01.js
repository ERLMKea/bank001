'use strict';

out("jeg er i message01");

function showMessage() {
  let strMessage = inpMessage.value;
  message.classList.add('cookie-message');
  strMessage += '<button class="btn btn--close--cookie">Got it!</button>';
  message.innerHTML = strMessage;
  header.append(message);
  const cookClose = document.querySelector('.btn--close--cookie');
  out(cookClose);
  cookClose.addEventListener('click', function () {
    message.remove();
  })
  out("col=" + getComputedStyle(message).color);
  out(getComputedStyle(message));
}

const pbGetMessage = document.querySelector(".pbGetMessage");
const inpMessage = document.getElementById("inpMessage");

const header = document.querySelector('.header');
const message = document.createElement('div');

pbGetMessage.addEventListener('click', showMessage);

message.style.width = '50%';
message.style.backgroundColor = '#37383d';

out("color=" + message.style.color);
out("width=" + message.clientWidth);
out("backgroundcolor=" + message.backgroundColor);

out(getComputedStyle(message).color);
