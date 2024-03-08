function renderProductos() {

    const productos = obtenerProductosLS()
    let contenido = ""

    for (const producto of productos) {
        
        contenido += `<div class = "col-md-3 text-center">
        <a href = "pages/producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
        <img src="${producto.imagen}" alt="${producto.nombre}" height ="200">
        <p class="colorFont my-3">${producto.nombre}</p>  
        </a>
        </div>`
    }
    
    document.getElementById("productos").innerHTML = contenido

}

renderProductos()