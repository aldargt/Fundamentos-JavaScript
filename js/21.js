
const sumar2=function(numero1, numero2){
    console.log(numero1+numero2);
}

sumar2(5,10);


//Arrow Functions
const sumar1=(numero1, numero2)=>console.log(numero1+numero2); //Cuando tienes solo una linea puedes borrar las llaves
                                                                //tambien puedes eliminar los parentesis de los parametros si solo hay uno

sumar1(5,10);

const aprendiendo=tecnologia=>{
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');


//----------------------------------------------------------- Convirtiendo a arrow functions lo de 15.js
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
meses.forEach(mes=>{
    console.log(mes);
});

meses.forEach(mes=>{
    if(mes=='Marzo'){
        console.log("Marzo existe");
    }
});

// //Includes
// let resultado=meses.includes('Marzo');

let resultado;
//Some ideal para arreglo de objetos
resultado=carrito.some(producto=>producto.Nombre=="Producto7"); //Tambien se puede eliminar el return de un arrow function(Se da por explicito)


//Otra manera de hacer lo mismo de arriva para arreglos con objetos pero mas corto
resultado=carrito.some(producto=>producto.Nombre=="Producto7")

//Reduce ---> Sumar los precios de los productos del arreglo con objetos
resultado=carrito.reduce((total, producto)=>total+producto.Precio,0);


//Forma reducida de arriva (Reduce)
resultado=carrito.reduce((total,producto)=>total+producto.Precio,0);


//Filter sirve para extraer los objetos del arreglo(Filtrar)
resultado=carrito.filter(producto=>producto.Precio>400);


resultado=carrito.filter(producto=>producto.Nombre!="Producto7");

console.log(resultado);