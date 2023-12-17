// Menus prinpales

let estado = true;

const menuGeneral = () => {
    while (estado) {
        opcion = parseInt(prompt(`
        Bienvenido a tu aseguradora de confianza, elige una opcion.

        1.- Menu de usuarios
        2.- Menu de vehiculos
        3.- Salir         
    `));

        switch (opcion) {
            case 1:
                console.log("Seleccionaste Menu de usuarios");
                menuUsuario();
                break;
            case 2:
                console.log("Seleccionaste Menu de vehiculos");
                menuVehiculos();
                break;
            case 3:
                console.log("Saliste del flujo");
                estado = false;
                break;
            default:
                console.log("Opcion no valida");
                alert("Opcion no Valida");
                break;
        }
    }
}

function menuUsuario() {
    while (estado) {
        opcion = parseInt(prompt(`
         Menu de usuarios.
        
         1.- Agregar Usuario
         2.- Eliminar Usuario
         3.- Ver Usuarios
         4.- Atras    
        `));
        switch (opcion) {
            case 1:
                console.log("Agregar Usuario");
                nombre = prompt("Ingresa el nombre");
                apellido = prompt("Ingresa el apellido");
                edad = prompt("Ingresa la edad");
                dinero = prompt("Ingresa el dinero")
                persona = new Persona (nombre, apellido, edad, dinero);
                console.log(`Se agrego ${nombre} ${apellido} a la base de datos`);
                alert(`Se agrego ${nombre} ${apellido} a la base de datos`);
                agregarPersona (persona);
                break;
            case 2:
                console.log("Eliminar Usuario");
                personaEliminada = parseInt(prompt("Ingresa el ID de la persona a eliminar"));
                eliminarPersona(personaEliminada);
                break;
            case 3:
                console.log("Ver Usuarios");
                alert("Estos son los usuarios en la base de datos")
                verPersonas ();
                break;
            case 4:
                console.log("Atras");
                menuGeneral();
                break;
            default:
                console.log("Opcion no Valida");
                alert("Opcion no Valida");
                break;
        }
    }
}

function menuVehiculos() {
    while (estado) {
        opcion = parseInt(prompt(`
         Menu de Vehiculos.
        
         1.- Agregar Vehiculo
         2.- Eliminar Vehiculo
         3.- Ver Vehiculos
         4.- Atras    
        `));
        switch (opcion) {
            case 1:
                console.log("Agregar Vehiculo");
                modelo = prompt("Ingresa la marca con el modelo del vehiculo");
                anio = parseInt(prompt("Ingresa el año del vehiculo"));
                precio = parseInt(prompt("ingresa el precio del vehiculo"));
                carro = new Vehiculo (modelo, anio, precio);
                agregarVehiculo(carro);
                break;
            case 2:
                console.log("Eliminar Vehiculo");
                verificacion();
                break;
            case 3:
                console.log("Ver Vehiculos");
                verVehiculos();
                break;
            case 4:
                console.log("Atras");
                menuGeneral();
                break;
            default:
                console.log("Opcion no Valida");
                alert("Opcion no Valida");
                break;
        }
    }
}

// Menu de Vehiculos

let vehiculos = [];
let vehiculosId = 1;

class Vehiculo {
    constructor(modelo, anio, precio) {
        this.modelo = modelo;
        this.anio = anio;
        this.precio = precio;
        this.id = vehiculosId;
    }
}

const verificacion = () => {
    if (vehiculos.length > 0) {
        alert("Estos son lo vehiculos en la base de datos");
        verVehiculos();
        eliminar = parseInt(prompt("Ingresa el ID del vehiculo a eliminar"));
        eliminarVehiculo(eliminar)
    } else {
        alert("No hay vehiculos en la base de datos");
        console.log("No hay vehiculos en la base de datos");
    }
}
const eliminarVehiculo =(id) => {
    vehiculos = vehiculos.filter(carro => carro.id !== id);
    alert("Esta es la nueva lista de Vehiculos");
    verVehiculos();
    console.log("La nueva lista de vehiculos");
    console.log(vehiculos);
}
const verVehiculos = ( ) => {
    mostarVehiculos = vehiculos.map ( vehiculo => `ID: ${vehiculo.id} -> Modelo: ${vehiculo.modelo}`);
    if (mostarVehiculos.length > 0) {
        alert(mostarVehiculos.join("\n"));
        console.log(mostarVehiculos.join("\n"));
    } else {
        alert("No hay vehiculos en la base de datos");
        console.log("No hay vehiculos en la base de datos");
    }
}
const agregarVehiculo = (carro) => {
    vehiculos.push(carro);
    vehiculosId++;
    console.log("Se agrego la base de datos:");
    console.log(carro);
}


// Menu de Personas

let personas = [];
let userID = 1;

class Persona {
    constructor(nombre, apellido, edad, dinero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dinero = dinero;
        this.id = userID;
    }
}

const eliminarPersona = (id) => {
    personas = personas.filter(persona => persona.id !== id);
}
const verPersonas = () => {
    nombrePersonas = personas.map ( persona => `Id: ${persona.id} -> Nombre: ${persona.nombre} ${persona.apellido}`);
    if (nombrePersonas.length > 0) {
        alert(nombrePersonas.join("\n"));
        console.log(nombrePersonas.join("\n"));
    } else {
        alert("No hay usuarios en la base de datos");
        console.log("No hay usuarios en la base de datos");
    }
}
const agregarPersona = (persona) => {
    personas.push(persona);
    userID++;
}




menuGeneral();