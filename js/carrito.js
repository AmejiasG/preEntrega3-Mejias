function renderMostrarCarrito() {

    const productosDelCarrito = cantTotalProductos()
    let contenido = ""
    let pagar = ""
    if(cantEnCarrito() > 0) {

        contenido = `<div><button onclick="eliminarCarrito(); notificacionBorrar();" id="btnEliminar" class="btn btn-danger">Eliminar Carrito</button></div>`
        for (const producto of productosDelCarrito) {
        
            contenido += `<div class="col-md-12">
                <div class="cajaDiv">
                    <img src="${producto.imagen}" alt="${producto.nombre}" width=150 class="img-fluid rounded-5">
                    <p class="colorFontCarrito m-4">${producto.nombre}</p>
                    <p class="colorFontCarrito my-4 mx-5">$${producto.precio}</p>
                    <div><button onclick="eliminarProducto(${producto.id});" id="btnEliminar" class="btn btn-light text-center fw-bold p-2 m-0">X</button></div>
                </div>
             </div>`
    
        }
        pagar = `<div class="row">
        <div class="col-md-12">
        <p class="colorFontCarrito text-end my-4 mx-5">Total a pagar: $${sumaProductos()}</p>
        </div>
        </div>`
    }
    document.getElementById("pagar").innerHTML = pagar;
    document.getElementById("mostrarCarrito").innerHTML = contenido;

}

renderMostrarCarrito();
renderBotonCarrito();
