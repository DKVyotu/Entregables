
// Importo solo el constructor de productos
import { Producto } from "../models/nuevoProducto.model.js"

// Importo todos los elementos de HtmlElemnts
import htmlElements from "../elements/html.elements.js";

// Verifica si hay algun producto guardado en LocalStorage y si lo hay lo incluye dentro de los productos guardados
let productosGuardados = JSON.parse(localStorage.getItem("ProductosGuardadoLocal")) || [];



// Creo una funcion que llama al constructor y asigna los valores de HtmlElements 
// y luego de asignarlos los agrega a la base de datos  
// Luego hace un print en consola de todos los productos que hay en la base de datos
const agregarProductoNuevo = () => {
    let productoNuevo = new Producto(
        htmlElements.nombreProductoNuevo.value,
        htmlElements.descripcionProductoNuevo.value,
        htmlElements.precioProductoNuevo.value,
        htmlElements.stockProductoNuevo.value,
        htmlElements.marcaProductoNuevo.value,
        htmlElements.garantiaProductoNuevo.value,
        htmlElements.pesoProductoNuevo.value,
        htmlElements.categoriaProductoNuevo.value,
        htmlElements.envioProductoNuevo.value,
        htmlElements.imagenProductoNuevo.value);

    productosGuardados.push(productoNuevo);

    localStorage.setItem("ProductosGuardadoLocal", JSON.stringify(productosGuardados));


    mostrarProductos();
}

const mostrarProductos = () => {
    // Borra todos los elementos existentes en el contenedor
    htmlElements.contenedorNewProducto.innerHTML = "";

    console.log(productosGuardados);

    productosGuardados.forEach(producto => {
        let card = document.createElement("div");
        card.className = "card d-flex justify-content-between";
        card.innerHTML = `
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png" class="imgZoom imgcard pb-3 align-self-center" alt="...">
        <div class="d-flex justify-content-between tx-12 tx-mediun tx-plomo">
            <div>Stock: ${producto.stock}</div>
            <div>SKU: ${producto.sku}</div>
        </div>
        <div class="pb-3">
            <p class="m-0 py-2 tx-18 tx-semibold lh-sm">${producto.nombre}</p>
            <p class="p-0 m-0 tx-mediun tx-12 lh-sm">${producto.descripcion}</p>
        </div>
        `
        // Creamos y estilamos el Contenedor de botones
        let contenedorBotones = document.createElement("div");
        contenedorBotones.className = "d-flex justify-content-between";

        // Creamos y estilamos el boton de Editar
        let botonEditar = document.createElement("button");
        botonEditar.innerText = "Editar";
        botonEditar.className = "btn btn-warning wid100 fw-medium";
        // Agregamos Funcionalidad 
        botonEditar.onclick = () => editarProducto(producto.sku);


        // Creamos y estilamos el boton de Eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.className = "btn btn-danger wid100 fw-medium";
        //Agregamos Funcionalidad
        botonEliminar.onclick = () => eliminarProducto(producto.sku)


        // Agregamos los botones al Contenedor
        contenedorBotones.append(botonEditar, botonEliminar);
        
        // Agregamos el contenedor a la Card
        card.appendChild(contenedorBotones);

        // Agregamos la Card al contenedor de Cards
        htmlElements.contenedorNewProducto.appendChild(card);
    });


}

const eliminarProducto = (skuEliminado) => {
    // Creamos un nuevo Array con todos los productos sin el selecionado
    productosGuardados = productosGuardados.filter(producto => producto.sku !== skuEliminado);

    // Guardamos la nueva lista 
    localStorage.setItem("ProductosGuardadoLocal", JSON.stringify(productosGuardados));

    // Mostramos la nueva lista
    mostrarProductos();
}

const editarProducto = (skuEditado) => {
    
    // Busca el SKU del producto a editar
    let i = productosGuardados.findIndex(producto => producto.sku === skuEditado)
    
    // Imprime la posicion del sku que buscabamos
    console.log(productosGuardados[i]);

}

//Exportando unas funciones especificas
export default {
    agregarProductoNuevo,
    mostrarProductos,
    eliminarProducto,
    editarProducto,
}


