function toggleMenu() {
    const nav = document.querySelector('main > nav');
    nav.classList.toggle('nav--closed');
}

function onClickMenuItem(menuItem) {
    console.log(menuItem);
    document.querySelector('.nav-item--seleccionado').classList.remove('nav-item--seleccionado');
    menuItem.classList.add('nav-item--seleccionado');
}