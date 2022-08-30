//Array Methods

const meses=['Enero','Febrero','Marzo','Abril','Mayo'];

const carrito=[
    {Nombre: 'Producto1', Precio: 100},
    {Nombre: 'Producto2', Precio: 200},
    {Nombre: 'Producto3', Precio: 300},
    {Nombre: 'Producto4', Precio: 400},
    {Nombre: 'Producto5', Precio: 500},
    {Nombre: 'Producto6', Precio: 600},
    {Nombre: 'Producto7', Precio: 700},
    {Nombre: 'Producto8', Precio: 800},
    {Nombre: 'Producto9', Precio: 900},
    {Nombre: 'Producto10', Precio: 1000},
];

//forEach
meses.forEach(function(mes){
    console.log(mes);
});

meses.forEach(function(mes){
    if(mes=='Marzo'){
        console.log("Marzo existe");
    }
});

//Includes
let resultado=meses.includes('Marzo');

//Some ideal para arreglo de objetos
resultado=carrito.some(function(producto){
    return producto.Nombre=="Producto7";
});

//Otra manera de hacer lo mismo de arriva para arreglos con objetos pero mas corto
resultado=carrito.some(producto=>producto.Nombre=="Producto7")

//Reduce ---> Sumar los precios de los productos del arreglo con objetos
resultado=carrito.reduce(function(total, producto){
    return total+producto.Precio;
},0);

//Forma reducida de arriva (Reduce)
resultado=carrito.reduce((total,producto)=>total+producto.Precio,0);


//Filter sirve para extraer los objetos del arreglo(Filtrar)
resultado=carrito.filter(function(producto){
    return producto.Precio>400;
});
resultado=carrito.filter(function(producto){
    return producto.Nombre!="Producto7";
});

console.log(resultado);