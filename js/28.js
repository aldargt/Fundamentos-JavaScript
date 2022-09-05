//Clases esta es la nueva forma de sintaxis con respecto a prototype

//Las clases siempre empiezan en mayuscula al igual que el anterior de objeto const.
class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    formatearProducto(){
        return `El produtcto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const producto1=new Producto("Maus",800);
const producto2=new Producto("Laptop",1000);

console.log(producto1);
console.log(producto2);
console.log(producto1.formatearProducto());