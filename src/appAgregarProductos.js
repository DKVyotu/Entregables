
console.log("Ejecutando desde el modulo appAgregarProductos");

// Importa objetos Html
import htmlElements from "./elements/html.elements.js";

// Importa funciones de otro JS
import funcionesManager from "./managers/agregarproducto.manager.js";

// Exporta solo una funcion

const app = () => {
    htmlElements.formProductoNuevo.onsubmit = (event) => {
        // previene que el formulario se recarge y llama una funcion en su lugar
        event.preventDefault();
        // Ejecuta esta funcion
        funcionesManager.agregarProductoNuevo();
        // Reinicia los inputs
        htmlElements.formProductoNuevo.reset();
    }

    funcionesManager.mostrarProductos();

    funcionesManager.eliminarProducto();

    funcionesManager.editarProducto();
}


app();