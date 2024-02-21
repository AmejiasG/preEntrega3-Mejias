function renderMostrarCarrito() {

    const productosDelCarrito = cantTotalProductos()
    let contenido = ""

    if(cantEnCarrito() > 0) {
        
        contenido = `<div><button onclick="eliminarProducto();" id="btnEliminar" class="btn btn-danger">Eliminar Carrito</button></div>`

        for (const producto of productosDelCarrito) {
        
            contenido += `<div class="col-md-12">
                <div class="cajaDiv">
                    <img src="${producto.imagen}" alt="${producto.nombre}" width=150 class="img-fluid rounded-5">
                    <p class="colorFontCarrito m-4">${producto.nombre}</p>
                    <p class="colorFontCarrito my-4 mx-5">${producto.precio}</p>
                </div>
             </div>`
    
        }
    }

    document.getElementById("mostrarCarrito").innerHTML = contenido;

}

renderMostrarCarrito();

