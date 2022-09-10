//ForEach y map solo pueden ser ejecutados en arreglos

const caarrito=[
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

//ForEach ---------------SOLO PUEDE SER USADA EN ARREGLOS y si quieres iterar y mostrar por la pantalla o consola es mejor usar foreach

caarrito.forEach(function(producto){
    console.log("Una vez por cada elemento");
    console.log(producto);
});

caarrito.forEach(producto=>console.log(producto)); //Lo mismo de arriva pero con arrow functions

const arreglo1=caarrito.forEach(producto=>producto.Nombre); //Ojo este no funciona porque esta usando foreach (ver linea 33)



//map ---------------SOLO PUEDE SER USADA EN ARREGLOS y map te crea un nuevo arreglo con lo que le quieras que quiera retornar

caarrito.map(producto=>console.log(producto));

const arreglo2=caarrito.map(producto=>producto.Nombre);  //Ojo este funciona porque esta usando map y el map es para eso(crear un arreglo)

const arreglo3=caarrito.map(producto=>`${producto.Nombre} - ${producto.Precio}`);

console.log(arreglo1);
console.log(arreglo2);

console.log(arreglo3);