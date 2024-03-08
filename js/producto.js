function renderProducto() {
    const producto = obtenerProductoLS();
    cargarSpinner();
    setTimeout(() => {

        let contenido = `<div class="col-md-12 text-center">
        <img src="${producto.imagen}" alt="${producto.nombre}" height=400 class="imagen mt-5">
        <p class="colorFont my-3">${producto.nombre}</p>
        <p class="colorFont my-3">${producto.descripcion}</p>
        <p class="colorFont my-3">${producto.precio}</p>
        <button onclick="guardarIDCarritoLS(${(producto.id)}); renderTotalCarrito(); notificacionListo();" id="btnAgregarCarrito" class="btn btn-primary">Añadir al Carrito</button>
        </div>`
    
        document.getElementById("producto").innerHTML = contenido;
    }, 1000);

}


renderProducto()
renderBotonCarrito()