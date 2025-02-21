function clickImagen(imagenNombre, elementoImg) {
    console.log(imagenNombre);

    console.log(elementoImg);

    console.log(elementoImg.getAttribute('src'));

    elementoImg.setAttribute('src', '../../assets/images/carro06.png');
    elementoImg.style['border'] = '1px solid red';
    elementoImg.style['transform'] = 'translate(100px, 100px)';

    console.log(event);

}

function dobleClickImagen(imagenNombre, elementoImg) {
    console.log(imagenNombre);

    console.log(elementoImg);

    console.log(elementoImg.getAttribute('src'));
    
    elementoImg.setAttribute('src', '../../assets/images/carro07.png')

    elementoImg.style['transform'] = 'translate(0px, 0px)';
}

function onDragImagen(elementoImg){
    if (event.clientX !== 0 && event.clientY !== 0) {
        elementoImg.style['left'] = `${event.clientX}px`;
        elementoImg.style['top'] = `${event.clientY}px`;
    }
    
}

// Reto
// Como detectar que estamos arrastrando una imagen en el html
// como cambiar la posicion de un elemento en el HTML
// Como saber las coordenadas del mouse
// Final: Implementar el drag and drop (arrastre) de imagenes
