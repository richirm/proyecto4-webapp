// 123: Number
// "hola": String
// true: Boolean
// {
//     nombre: 'Ric'
// } => Objeto
// ['pera', 'fresa'] => array
{/* <img> <h1> <p> => HTMLElement */}

function clickImagen(nombreImagen, elementoImg) {
    console.log(nombreImagen);

    console.log(elementoImg);

    console.log(elementoImg.getAttribute('src'));

    elementoImg.setAttribute('src', '../../assets/images/ovni06.png');
    elementoImg.style['border'] = '1px solid red';
    // elementoImg.style['transform'] = 'translate(100px, 100px)';

    console.log(event);
}

function dobleClickImagen(nombreImagen, elementoImg) {
    console.log(nombreImagen);

    console.log(elementoImg);

    console.log(elementoImg.getAttribute('src'));

    elementoImg.setAttribute('src', '../../assets/images/ovni07.png');
    // elementoImg.style['transform'] = 'translate(0px, 0px)';
}

// Reto
// 1. Como detectar que estamos arrastrando una imagen en el html
// 2. como cambiar la posicion de un elemento en el HTML
// 3. Como saber las coordenadas del mouse
// Final: Implementar el drag and drop (arrastre) de imagenes

function onDragImagen(elementoImg) {
    // elementoImg.style['transform'] = `translate(${event.clientX}px, ${event.clientY}px)`;
    if (event.clientX !== 0 && event.clientY !== 0) {
        elementoImg.style['left'] = `${event.clientX}px`;
        elementoImg.style['top'] = `${event.clientY}px`;
    }
}