    
// Importa objetos Html
import htmlElements from "./elements/html.elements.js";

// Importa funciones de otro JS
import funcionesManager from "./managers/agregarproducto.manager.js";


htmlElements.formProductoNuevo.onsubmit = (event) => {
    // previene que el formulario se recarge y llama una funcion en su lugar
    event.preventDefault();
    // Ejecuta esta funcion
    funcionesManager.agregarProductoNuevo();
    // Reinicia los inputs
    htmlElements.formProductoNuevo.reset();
}

funcionesManager.mostrarProductos();


htmlElements.filtroCategoria.onchange = () => {
    // Recibe el valor que tiene el select y llama a la funcion de filtro
    funcionesManager.filtrarProducto(htmlElements.filtroCategoria.value);
}

