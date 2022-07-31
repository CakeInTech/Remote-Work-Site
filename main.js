const hamMenu = document.querySelector('.ham-menu');
const navBar = document.querySelector('.list-items');
const closeMenu = document.querySelector('.close-menu');

hamMenu.addEventListener('click', () => {
  navBar.style.transform = 'scale(1)';
});

closeMenu.addEventListener('click', () => {
  navBar.style.transform = 'scale(0)';
});