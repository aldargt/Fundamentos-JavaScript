// Objetos

const nombreProducto="Monitor de 20 pulgadas";
const precio=300;
const disponible=true;

const producto={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

console.log(producto.precio); //Con un . se puede acceder a las propidades del objeto
console.log(producto["disponible"]); //Con esta forma tambien se puede acceder a las propiedades de un objeto, solo que es mejor hacerlo con un .

//Agregar nuevas propidades a un objeto
producto.imagen='Imagen.jpg';

//Eliminar propiedades
delete producto.disponible;

console.log(producto);