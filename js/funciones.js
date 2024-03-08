const carrito = []
const productos = [
    {"id":1, "nombre":"Hamburguesa Italiana", "imagen":"/img/hamitaliana.png", "descripcion":"Contundente hamburguesa con palta, tomate y mayo", "precio":3500},
    {"id":2, "nombre":"Barros Luco", "imagen":"/img/luco.png", "descripcion":"Pan con carne posta paleta y queso manteocoso ", "precio":3200},
    {"id":3, "nombre":"Hamburguesa Tocino y Queso", "imagen":"/img/tocinoyqueso.jpg", "descripcion":"Rica hamburguesa con tocino, queso, lechuga y tomate", "precio":3800},
    {"id":4, "nombre":"Completo Italiano", "imagen":"/img/compita.png", "descripcion":"Delicioso completo con palta, tomate y mayo", "precio":2000},
    {"id":5, "nombre":"As queso", "imagen":"/img/asqueso.webp", "descripcion":"Pan de completo con carne y queso", "precio":2500},
    {"id":6, "nombre":"As Italiano", "imagen":"/img/asitaliano.jpg", "descripcion":"Pan de completo con palta, tomate y mayo", "precio":2800},
    {"id":7, "nombre":"Pizza Napolitana", "imagen":"/img/pizzanap.jpg", "descripcion":"Rica pizza con salsa de tomate, queso y oregano", "precio":4200},
    {"id":8, "nombre":"Pizza Pepperoni", "imagen":"/img/pizzapep.avif", "descripcion":"Rica pizza con salsa de tomate y pepperoni", "precio":4000},
    {"id":9, "nombre":"Jugo de Durazno", "imagen":"/img/jugo.avif", "descripcion":"Juguito helado de durazno", "precio":1400},
    {"id":10, "nombre":"Lata Sprite", "imagen":"/img/latasprite.jpg", "descripcion":"Helada lata de bebida Sprite", "precio":1200},
    {"id":11, "nombre":"Lata Coca-Cola", "imagen":"/img/latacocacola.jpg", "descripcion":"Helada lata de bebida Coca-Cola", "precio":1200},
    {"id":12, "nombre":"Lata Fanta", "imagen":"/img/latafanta.jpg", "descripcion":"Helada lata de bebida Fanta", "precio":1200}

]

const guardarProductosLS = (productos) => {

    localStorage.setItem("productos", JSON.stringify(productos))

}

// Obtener productosdeLS
const obtencionProd = () => {

    return JSON.parse(localStorage.getItem("productosobj"))
}

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
        text: "Se ha añadido al carrito!",
      });

}

function notificacionBorrar() {

    Swal.fire({
        icon: "success",
        title: "Listo!",
        text: "Se ha borrado el carrito!",
      });

}


guardarProductosLS(productos);
renderTotalCarrito();