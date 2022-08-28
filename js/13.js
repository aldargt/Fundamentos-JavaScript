
const producto={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

const medidas={
    peso: '1kg',
    medidad: '1m',
}

const nuevoProducto={...producto, ...medidas}; //Unir dos objetos sin modificar ninguno de los anteriores (Rest operator o Spread operator)

console.log(producto);
console.log(nuevoProducto);