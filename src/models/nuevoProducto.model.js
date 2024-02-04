import { v4 as id } from "uuid";

// Crear clases

export class Producto {
    constructor(nombre, descripcion, precio, stock, categoria, envio, imagenes) {
        this.nombre = nombre;
        this.id = id();
        this.descripcion = descripcion;
        this.precio =parseInt(precio);
        this.stock = parseInt(stock);
        this.categoria = categoria;
        this.envio = envio;
        this.imagenes = imagenes;
    }
}