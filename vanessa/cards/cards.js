const productosSeleccionados = [];

function agregarProducto(nombre, descripcion, precio, oferta, descuento) {
    console.log(nombre, descripcion, precio, oferta, descuento);

    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        oferta: oferta,
        descuento: descuento,
    };

    console.log(producto);

    productosSeleccionados.pus(producto);

    console.log(productosSeleccionados);
}
// function agregarPrecio(precioProducto) {
//     console.log(precioProducto);
// }

// nombre
// descripcion
// precio
// oferta
// descuento