//POO

//Object literal
const producto={
    nombre: 'Ronny',
    apellido: 'Huarachi'
}

//Object constructor
function Producto(nombre,precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}
//Prototypes crea funciones que solo se utilizan en un objeto en especifico(Ojo esta es la sintaxs de la forma anterior)
Producto.prototype.formatearProducto=function(){
    return `El produtcto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto1=new Producto("Maus",800);
const producto2=new Producto("Laptop",1000);
const producto3=new Producto("Teclado",1000,true);
const producto4=new Producto("Camara",1000,false);

function formatearProducto(producto){
    return `El produtcto ${producto.nombre} tiene un precio de ${producto.precio}`;
}

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(formatearProducto(producto2));

//Este hace referencia el de prototype linea 15 osea hace lo mismo que la linea 25
console.log(producto2.formatearProducto());

