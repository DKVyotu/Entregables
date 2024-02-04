
// Importo solo el constructor de productos
import { Producto } from "../models/nuevoProducto.model.js"

// Importo todos los elementos de HtmlElemnts
import htmlElements from "../elements/html.elements.js";

// Importo la funcion de mostrar productos desde la db
import productosApi from "../api/productos.api.js";

// importamos Sweetalert
import Swal from "sweetalert2";


const agregarProductoNuevo = async () => {
    // Creo una funcion que llama al constructor y asigna los valores de HtmlElements 
    // y luego de asignarlos los agrega a la base de datos  
    // Luego hace un print en consola de todos los productos que hay en la base de datos

    let productoNuevo = new Producto(
        htmlElements.nombreProductoNuevo.value,
        htmlElements.descripcionProductoNuevo.value,
        htmlElements.precioProductoNuevo.value,
        htmlElements.stockProductoNuevo.value,
        htmlElements.categoriaProductoNuevo.value,
        htmlElements.envioProductoNuevo.value,
        htmlElements.imagenProductoNuevo.value);

    await productosApi.agregarProducto(productoNuevo);
    
    Swal.fire({
        title: "Exito",
        html: `Se agrego <b>${productoNuevo.nombre}</b> correctamente!`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: "green",
        timer: 3000,
        timerProgressBar: true
      })

    mostrarProductos();
}

const mostrarProductos = async () => {
    // Borra todos los elementos existentes en el contenedor
    htmlElements.contenedorNewProducto.innerHTML = "";

    let productosGuardados = await productosApi.obtenerProductos();


    productosGuardados.forEach(producto => {
        let card = document.createElement("div");
        card.className = "card d-flex justify-content-between";
        card.innerHTML = `
        <img src=${producto.imagenes} class="imgZoom imgcard pb-3 align-self-center" alt="...">
        <div class="tx-9 tx-mediun tx-plomo">SKU: ${producto.id}</div>
        <div class="d-flex justify-content-between tx-12 tx-mediun">
            <div>Precio: $${producto.precio}</div>
            <div>Categoria: <strong>${producto.categoria}</strong></div>
        </div>
        <div class="d-flex justify-content-center tx-16 tx-mediun tx-plomo">Stock: ${producto.stock}</div>
        <div>
            <p class="m-0 py-2 tx-18 tx-semibold lh-sm">${producto.nombre}</p>
        </div>
        `
        // Creamos y estilamos el Contenedor de botones 1
        let contenedorBotones = document.createElement("div");
        contenedorBotones.className = "d-flex justify-content-center";

        // Creamos y estilamos el boton de Eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.className = "btn btn-danger wid100p fw-medium";
        //Agregamos Funcionalidad
        botonEliminar.onclick = () => eliminarProducto(producto.id);

        // Creamos y estilamos el Contenedor de botones2
        let contenedorBotones2 = document.createElement("div");
        contenedorBotones2.className = "d-flex justify-content-between pb-1";

        // Creamos boton de quitar 10 de stock
        let botonSinStock = document.createElement("button");
        botonSinStock.innerText = "Stock -10";
        botonSinStock.className = "btn btn-secondary wid100 fw-medium";
        // Agregamos funcionalidad
        botonSinStock.onclick = () => eliminar10Stock(producto.id);

        // Creamos boton de agregar 10 de stock
        let boton10Stock = document.createElement("button");
        boton10Stock.innerText = "Stock +10";
        boton10Stock.className = "btn btn-success wid100 fw-medium"
        // Agregamos funcionalidad
        boton10Stock.onclick = () => agregar10Stock(producto.id);

        // Agregamos los botones al contenedor2
        contenedorBotones2.append(botonSinStock, boton10Stock);

        // Agregamos los botones al Contenedor
        contenedorBotones.append(botonEliminar);

        // Contenedor de contenedores de botones
        let contenedorMaster = document.createElement("div");
        contenedorMaster.append(contenedorBotones2, contenedorBotones)


        // Agregamos el contenedor a la Card
        card.append(contenedorMaster);

        // Agregamos la Card al contenedor de Cards
        htmlElements.contenedorNewProducto.appendChild(card);
    });


}

const eliminarProducto = (id) => {

    Swal.fire({
        title: "Advertencia",
        html: '¿Estas seguro que quieres eliminar el Producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "green",
        cancelButtonText: "Cancelar",
        cancelButtonColor: "Red",
        timer: 3000,
        timerProgressBar: true,
      }).then(async (resp) => {
        if (resp.isConfirmed) {
            await productosApi.eliminarProductoId(id); 

            Swal.fire({
                title: "Producto eliminado",
                showConfirmButton: false,
                timer: 1500,
            });

            mostrarProductos();
        } else {
            Swal.fire({
                title: "Producto no eliminado",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    });

}

const eliminar10Stock = async (id) => {

    let producto = await productosApi.obtenerProductoId(id);

    if (producto.stock > 9) {
        producto.stock = producto.stock - 10;
    } else {
        Swal.fire({
            title: 'Stock no puede ser menor que 0!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: "green",
            timer: 2000,
            timerProgressBar: true
          })
    }

    await productosApi.actualizarProducto(id, producto)

    mostrarProductos();

}

const agregar10Stock = async (id) => {

    let producto = await productosApi.obtenerProductoId(id);

    producto.stock = producto.stock + 10;

    await productosApi.actualizarProducto(id, producto);

    mostrarProductos();

}

const editarProducto = (id) => {

    // En desarollo

}

const filtrarProducto = async (categoria) => {

    let productosGuardados = await productosApi.obtenerProductos();

    if (categoria === "categoria1") {

        let productosCategoria1 = productosGuardados.filter(producto => producto.categoria === categoria);
        mostrarProductos(productosCategoria1);

    } else if (categoria === "categoria2") {

        let productosCategoria2 = productosGuardados.filter(producto => producto.categoria === categoria);
        mostrarProductos(productosCategoria2);

    } else if (categoria === "categoria3") {

        let productosCategoria3 = productosGuardados.filter(producto => producto.categoria === categoria);
        mostrarProductos(productosCategoria3);

    } else if (categoria === "sinCategoria") {

        let productosSinCategoria = productosGuardados.filter(producto => producto.categoria === categoria);
        mostrarProductos(productosSinCategoria);

    } else {
        mostrarProductos();
    }

}


//Exportando unas funciones especificas
export default {
    agregarProductoNuevo,
    mostrarProductos,
    eliminarProducto,
    editarProducto,
    filtrarProducto,
}


