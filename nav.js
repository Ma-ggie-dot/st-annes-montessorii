// Mobile menu: open/close the links panel
const nav = document.querySelector('nav');
const burger = document.querySelector('.burger');

if (nav && burger) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });

  // Close the menu after tapping a link
  nav.querySelectorAll('.links a').forEach(a =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
}