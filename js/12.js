//"use strict";  //Coree JavaScript en modo estricto

// Objetos ---- .freeze  .seal ---> la diferencia entre estos dos es que con .seal puedes editar las propiedades de un objeto
                                  //pero en ambos casos no se pueden agregar ni eliminar propiedades de un objeto
const producto={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

Object.freeze(producto); //Congela el objeto para no ser modificado

producto.imagen="imagen.jpg";

console.log(Object.isFrozen(producto)); //Avisa con un boolenado si el objeto esta congelado o no

console.log(producto);
//-------------------------------------------------------------------------------------
const producto1={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

Object.seal(producto1); //Sella el objeto, solo se puede editar las propidades mas no se puede agregar ni eliminar propiedades

producto1.precio=1000;

console.log(Object.isSealed(producto1)); //Avisa con un boolenado si el objeto esta sellado o no

console.log(producto1);