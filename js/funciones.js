const carrito = []

const obtenerProductosLS = () => {

   return JSON.parse(localStorage.getItem("productos")) || []
    
}

const guardarCarritoLS = (productos) => {
    localStorage.setItem("listadoCarrito", JSON.stringify(productos));
}

const guardarIDCarritoLS = (producto_carritoid) => {

    const productos = obtenerProductosLS()
    const id = producto_carritoid
    const producto = productos.find(item => item.id === id) // buscamos nuestro producto por id y lo asignamos a producto
    const validarCarrito = localStorage.getItem("listadoCarrito") // asignamos lo que nos entrega "listadoCarrito"

    if (validarCarrito == null) { // cuando carrito ya tenga 1 objeto, entrara al if
        carrito.push(producto) // al ser null la primera vez que entra, pushea producto en carrito como un objeto, por lo tanto carrito tiene 1 objeto
        localStorage.setItem("listadoCarrito", JSON.stringify(carrito)) // y setea carrito en la LS como string en "listadoCarrito"
        return 0
    }
    
    const listadoCarritoLS = JSON.parse(localStorage.getItem("listadoCarrito")) // listado carrito pasa a ser objeto de nuevo y se guarda en listadoCarritoLS
    listadoCarritoLS.push(producto) // agrega lo que este en producto al final de la lista en listadoCarritoLS
    localStorage.setItem("listadoCarrito",JSON.stringify(listadoCarritoLS)) // setea listadoCarritLS en la LS como string en "listadoCarrito"
}

const obtenerCarritoLS = () => {

    return JSON.parse(localStorage.getItem("listadoCarrito")) || []

}

const obtenerPrecioProductoLS = () => {

    return JSON.parse(localStorage.getItem("precio")) || 0

}

const obtenerIdProductoLS = () => {

    return JSON.parse(localStorage.getItem("producto")) || 0

}

const obtenerProductoLS = () => {

    const productos = obtenerProductosLS()
    const id = obtenerIdProductoLS()
    const producto = productos.find(item => item.id === id)
    return producto
}

const cantTotalProductos = () => { // Cantidad de productos en objetos

    const carrito = obtenerCarritoLS()
    return carrito

}

const cantEnCarrito = () => { //Cantidad de productos en numeros

    const carrito = obtenerCarritoLS()
    return carrito.length

}

const verProducto = (id) => {

    localStorage.setItem("producto", JSON.stringify(id))

}

const verPrecio = (precio) => {

    localStorage.setItem("precio", JSON.stringify(precio))
}

const eliminarProducto = (id) => {
    function notificacionPregunta() {

        Swal.fire({
            title: "¿Quieres borrar del carrito este producto?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar"
          }).then((result) => {
            if (result.isConfirmed) {
                guardarCarritoLS(nuevoCarrito);
                //Vuelvo a mostrar carrito y el boton carrito
                renderMostrarCarrito();
                renderBotonCarrito();
              Swal.fire({
                title: "Borrado!",
                icon: "success"
              });
            }
          });
    }
    // Obtengo el array en formato JSON / original
    const productos = obtenerCarritoLS();
    // Filtro por el id del array
    const nuevoCarrito = productos.filter(producto => producto.id != id)
    notificacionPregunta();

}

const sumaProductos = () => {

    const carrito = obtenerCarritoLS();
    return carrito.reduce((acc,el) => acc + el.precio, 0)

}

const renderBotonCarrito = () => {

    document.getElementById("productosCarrito").innerHTML = cantEnCarrito()
}

const eliminarCarrito = () => {

    localStorage.removeItem("listadoCarrito")
    renderMostrarCarrito();
    renderBotonCarrito();
}


const renderTotalCarrito = () => {

    document.getElementById("productosCarrito").innerHTML = cantEnCarrito()

}

function notificacionListo() {

    Swal.fire({
        icon: "success",
        title: "Listo!",
        text: "Se añadió al carrito!",
      });

}

function notificacionPagar() {

    Swal.fire({
        icon: "success",
        title: "Has pagado: $" + sumaProductos(),
        text: "Tu pedido está siendo procesado!",
      });

}

function notificacionBorrar() {

    Swal.fire({
        icon: "success",
        title: "Listo!",
        text: "Se ha borrado el carrito!",
      });

}

const cargarSpinner = () => {
    document.getElementById("producto").innerHTML = `<div class="col-md-12 text-center my-5">
    <div class="spinner-border text-warning" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    </div>`;
}

renderTotalCarrito();