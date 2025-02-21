const productosSeleccionados = [];

function agregarProducto(nombre, descripcion, precio, oferta, descuento, imagen) {
    // console.log(nombre, descripcion, precio, oferta, descuento);

    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        oferta: oferta,
        descuento: descuento,
        imagen: imagen
    };

    console.log(producto);

    // Reto, insertar el producto dentro del productosSeleccionados
    productosSeleccionados.push(producto);

    console.log(productosSeleccionados);
}

// nombre
// descripcion
// precio
// oferta
// descuento

// number
// booleano
// string
// objeto
// arrays