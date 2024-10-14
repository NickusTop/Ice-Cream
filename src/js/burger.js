document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const menu = document.getElementById('menu');
    const openMenuBtn = document.getElementById('openMenu');
    const closeMenuBtn = document.getElementById('closeMenu');

    openMenuBtn.addEventListener('click', function() {
        menu.classList.add('active');
        body.classList.add('no-scroll');
    });

    closeMenuBtn.addEventListener('click', function() {
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});
