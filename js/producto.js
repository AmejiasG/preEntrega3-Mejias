function renderProducto() {
    const producto = obtenerProductoLS();
    
    let contenido = `<div class="col-md-12 text-center">
        <img src="${producto.imagen}" alt="${producto.nombre}" class="imagen">
        <p class="colorFont my-3">${producto.nombre}</p>
        <p class="colorFont my-3">${producto.descripcion}</p>
        <p class="colorFont my-3">${producto.precio}</p>
        <button onclick="guardarIDCarritoLS(${(producto.id)}); renderTotalCarrito(); notificacionListo();" id="btnAgregarCarrito" class="btn btn-primary">Añadir al Carrito</button>
    </div>`
    
    document.getElementById("producto").innerHTML = contenido;
}

renderProducto()
renderBotonCarrito()