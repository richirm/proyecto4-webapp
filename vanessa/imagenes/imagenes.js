function clickImagen(nombreImagen, elementoImg) {
   console.log(nombreImagen);

   console.log(elementoImg);

   console.log(elementoImg.getAttribute('src'));

   elementoImg.setAttribute('src', '../../assets/images/mario06.png');
   elementoImg.style['border'] = '1px solid red';
   elementoImg.style['transform'] = 'translate(100px, 100px)';

}

function handleDoubleClick(nombreImagen, elementoImg) {
   console.log(nombreImagen);

   console.log(elementoImg);

   console.log(elementoImg.getAttribute('src'));

   elementoImg.setAttribute('src', '../../assets/images/consola.png');
   elementoImg.style['transform'] = 'translate(0px, 0px)';

}

function onDragImagen(elementoImg) {
   // elementoImg.style['transform'] = 'translate(100px, 100px)';
   if (event.clientX !== 0 && event.clientY !== 0) {
      elementoImg.style['left'] = `${event.clientX}px`;
      elementoImg.style['top'] = `${event.clientY}px`;
  }
}