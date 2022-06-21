// Tienda de Consolas de Videojuegos

function Bienvenida(){
    alert("Bienvenido a GamerZone");
    let nombre = prompt("Ingrese su nombre");
    alert("Bienvenido " + nombre);
}

function comprar(){
    consola = prompt("Escoja un Producto \n 1) Xbox Series X \n 2) Playstation 5 \n 3) Nintendo Switch");
    if (consola === "1"){
        alert("Has seleccionado un Xbox Series X");
    } else if (consola === "2"){
        alert("Has seleccionado un Playstation 5");
    } else if (consola === "3"){
        alert("Has seleccionado un Nintendo Switch");
    }
    opcion = prompt("Escoja un Producto \n 2) Mostrar Total \n 3) Finalizar");
}

function finalizar(){
    if (consola === "1"){
        alert("El Xbox Series X Tiene un valor total de $" + xbox);
    } else if (consola === "2"){
        alert("El Playstation 5 Tiene un valor total de $" + play);
    } else if (consola === "3"){
        alert("El Nintendo Switch Tiene un valor total de $" + nintendo);
    }
}
let consola;
let xbox = 500;
let play = 500;
let nintendo = 300;

Bienvenida()
let opcion = prompt("Escoja una Opcion \n 1) Comprar Consola \n 2) Finalizar Compra \n 3) Terminar");
while (opcion !== 3){
    if (opcion === "1"){
        comprar();
    }
    if (opcion === "2"){
        finalizar();
        alert("Gracias por su Compra");
        opcion = "3";
    }
}