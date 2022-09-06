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

//Herencia (extends)
class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre,precio);
        this.isbn=isbn;
    }

    formatearProducto(){
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
    }
}

const libro=new Libro('Poder 48', 50, '781824455');

console.log(libro);
console.log(libro.formatearProducto());

console.log(producto1);
console.log(producto2);
console.log(producto1.formatearProducto());