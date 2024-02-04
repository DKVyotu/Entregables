
// Obtener todas los productos - Método GET

const obtenerProductos = async () => {

    let resp = await fetch("http://localhost:3000/productos");
    let productos = await resp.json();
    return productos;
}

// Obtener producto por id - Método GET

const obtenerProductoId = async (sku) => {
    const resp = await fetch(`http://localhost:3000/productos/${sku}`);
    const producto = await resp.json();
    return producto;

}

// Agregar un producto - Método POST

const agregarProducto = async (producto) => {

    let resp = await fetch("http://localhost:3000/productos", {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let productoNuevo = await resp.json();
    return productoNuevo;

}

// Actualizar un producto - Método PUT

const actualizarProducto = async (id, producto) => {

    let resp = await fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        body: JSON.stringify(producto),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let productoNuevo = await resp.json();
    return productoNuevo;

}

// Eliminar una tarea - Método DELETE

const eliminarProductoId = async (id) => {

    const resp = await fetch(`http://localhost:3000/productos/${id}`,{
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    let producto = await resp.json();
    return producto;

}




export default {
    obtenerProductos,
    obtenerProductoId,
    agregarProducto,
    actualizarProducto,
    eliminarProductoId
}