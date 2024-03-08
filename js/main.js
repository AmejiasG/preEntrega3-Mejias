function renderProductos() {
    fetch('js/productos.json')
    .then(respuesta => respuesta.json())
    .then(productos => {
        let contenido = ""
        localStorage.setItem("productos", JSON.stringify(productos))
    
        for (const producto of productos) {
            
            contenido += `<div class = "col-md-3 text-center">
            <a href = "pages/producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
            <img src="${producto.imagen}" class="imagen" alt="${producto.nombre}" height ="200">
            <p class="colorFont my-3">${producto.nombre}</p>  
            </a>
            </div>`
        }
        
        document.getElementById("productos").innerHTML = contenido
    })

}

renderProductos();