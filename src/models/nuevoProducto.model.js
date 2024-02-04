import { v4 as id } from "uuid";

// Crear clases

export class Producto {
    constructor(nombre, descripcion, precio, stock, marca, garantia, peso, categoria, envio, imagenes) {
        this.nombre = nombre;
        this.id = id();
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = parseInt(stock);
        this.marca = marca;
        this.garantia = garantia;
        this.peso = peso;
        this.categoria = categoria;
        this.envio = envio;
        this.imagenes = imagenes;
    }
}