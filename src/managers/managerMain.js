
import elementsMain from "../elements/elementsMain.js";

// Recupera los productos desde localStorage
let productosGuardados = JSON.parse(localStorage.getItem("ProductosGuardadoLocal")) || [];


const mostrarProductos = (productosGuardados) => {
    elementsMain.contenedorIndex.innerHTML = " ";

    if (productosGuardados.length === 0) {
        // Si no hay productos, agrega un texto indicando que no hay productos
        let sinProductos = document.createElement("div");

        // Creamos texto
        let texto = document.createElement("h2");
        texto.className = "my-4 text-center"
        texto.innerHTML = "Sin productos"

        // Creamos card 
        let contenedor = document.createElement("div");
        contenedor.className = "d-flex justify-content-center";
        contenedor.innerHTML = `
        <a class="d-flex flex-column temporal" href="./pages/newProduct.html">
          <img src="./media/Subir.png" class="imgZoom imgcard pb-3 align-self-center" alt="...">
          <div class="pb-3">
            <p class="m-0 py-2 tx-18 tx-semibold lh-sm text-center">Click para subir</p>
            <p class="p-0 m-0 tx-mediun tx-12 lh-sm text-center">Productos Nuevos</p>
          </div>        
        </a>
        `
        // Insertamos el texto y card sentro del contenedor
        sinProductos.append(texto, contenedor);

        elementsMain.contenedorIndex.appendChild(sinProductos);
    } else {

        productosGuardados.forEach(producto => {
            let card = document.createElement("a");
            card.className = "card d-flex justify-content-between";
            card.href = "./pages/newProduct.html"
            card.innerHTML = `
            <div>Categoria: <strong>${producto.categoria}</strong></div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png" class="imgZoom imgcard pb-3 align-self-center" alt="...">
            <div class="d-flex justify-content-between tx-12 tx-mediun tx-plomo">
                <div>Stock: ${producto.stock}</div>
                <div>SKU: ${producto.sku}</div> 
            </div>
            <div class="pb-3">
                <p class="m-0 py-2 tx-18 tx-semibold lh-sm">${producto.nombre}</p>
                <p class="p-0 m-0 tx-mediun tx-12 lh-sm">${producto.descripcion}</p>
            </div>       
            <div class="d-flex justify-content-between">
                <div>
                  <div class="tx-12 tx-bold">Precio</div>
                  <div class="tx-16 tx-ultrabold">$ ${producto.precio}</div>
                </div>
                <a class="btn btn-primary CartBtn wid100" href="https://www.google.com/" target="_blank">
                  <i class="bi bi-cart3 IconContainer"></i>
                  <strong class="">Añadir</strong>
                </a>
            </div>
            `
            elementsMain.contenedorIndex.appendChild(card);
        });
    }

}

export default {
    productosGuardados,
    mostrarProductos,
}