// Crear clases

export class Producto {
    constructor(nombre, descripcion, precio, stock, marca, garantia, peso, categoria, envio, imagenes) {
        this.nombre = nombre;
        this.sku = Date.now().toString(36);
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.marca = marca;
        this.garantia = garantia;
        this.peso = peso;
        this.categoria = categoria;
        this.envio = envio;
        this.imagenes = imagenes;
    }
}