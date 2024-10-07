const menu = document.querySelector('.menu');
const menuToggle = document.getElementById('menuToggle');

menuToggle.addEventListener('click', () => {
    if (menu.style.left === '-250px') {
        menu.style.left = '0';
    } else {
        menu.style.left = '-250px';
    }
});
