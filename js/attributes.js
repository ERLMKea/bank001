out("jeg er i attributes");

const logo = document.querySelector('.nav__logo');

out(logo.alt);
out(logo.src);
out(logo.designer); //virker ikke fordi ikke standard property
out(logo.className); //virker

logo.alt = 'Beautiful logo';

out(logo.alt); //virker

out(logo.getAttribute('designer')); //virker

logo.setAttribute('company', 'goldmann');

out(logo.src);
out(logo.getAttribute('src'));

const btnModal = document.querySelector('.btn--show-modal');
out(btnModal.href);
out(btnModal.getAttribute('href'));

//Data attributes
out(logo.dataset.versionNumber);


