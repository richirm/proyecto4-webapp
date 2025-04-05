function toggleMenu() {
    const nav = document.querySelector('main > nav');
    nav.classList.toggle('nav--closed');
}

function onClickMenuItem(navItem) {
    document.querySelector('.nav-item--seleccionado').classList.remove('nav-item--seleccionado');
    navItem.classList.add('nav-item--seleccionado');
}