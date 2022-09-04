//POO

//Object literal
const producto={
    nombre: 'Ronny',
    apellido: 'Huarachi'
}

//Object constructor
function Producto(nombre, precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible;
}

const producto1=new Producto("Maus",800);
const producto2=new Producto("Laptop",1000);
const producto3=new Producto("Teclado",1000,true);
const producto4=new Producto("Camara",1000,false);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);