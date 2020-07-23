//Select element function

// nav toggle
const selectElement = (element) => {
  return document.querySelector(element);
}

let navToggle = selectElement('.menu-toggle');
let body = selectElement('body');

navToggle.addEventListener('click', function () {
  body.classList.toggle('show-nav');
});

// scroll reveal animation

ScrollReveal().reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  delay: 300,
  distance: '25rem'
});

ScrollReveal().reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  delay: 300,
  distance: '25rem'
});

ScrollReveal().reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  delay: 600,
  distance: '20rem'
});

ScrollReveal().reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  delay: 600,
  distance: '20rem'
});




