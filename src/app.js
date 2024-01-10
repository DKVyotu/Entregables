// Importa objetos Html
import htmlElements from "./elements/html.elements";

// Importa funciones de otro JS
import funcionesManager from "./managers/agregarproducto.manager";  

// Exporta solo una funcion

export const app = () => {
    console.log("Ejecutando la App desde modulo apps");
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


