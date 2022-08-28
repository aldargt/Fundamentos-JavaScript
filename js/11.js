// Objetos

const producto={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

//Forma Anterior de sacar propiedades de un objeto y asignarlos en una nueva variable
//const precioProducto=producto.precio;
//const nombreProducto=producto.nombreProducto;



// Destructuring Nueva forma de sacar propiedades de un objeto y asignarlos en variables
const {disponible}=producto;
const {precio, nombreProducto}=producto;

console.log(disponible);
console.log(precio);
console.log(nombreProducto);