//For Loop

// for(let i=0; i<10; i++){
//     console.log(i+1);
// }

// for(let i=0; i<11; i++){
//     if(i%2==0){
//         console.log(i+" El numero es par");
//     }else{
//         console.log(i+" El numero es impar");
//     }
// }

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


// for(let i=0;i<caarrito.length;i++){
//     console.log(caarrito[i].Precio);
// }


//While Loop------------------EN EL WHILE PRIMERO VA A REVISAR SI SE CUMPLE LA CONDICION Y SI CUMPLE RECIEN EJECUTA EL CODIGO


/*let i=1; //indice

while(i<=10){  //condicion
    if(i%2==0){
        console.log(i+" es PAR");
    }else{
        console.log(i+" es IMPAR");
    }

    i++;   //incremento
}

let ind=1; //indice

while(ind<caarrito.length){  //condicion
    console.log(caarrito[ind].Nombre);
    ind++;   //incremento
}*/

//Do While Loop------------EN UN DO WHILE EL CODIGO SE EJCUTA AL MENOS UNA VEZ

let i=100;

do{
    console.log(i);
    i++;
}while(i<103);