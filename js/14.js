// Arreglos y Arrays

const numeros=[10,20,30,40,50];

console.table(numeros);


const meses=['Enero','Febrero','Marzo','Abril','Mayo'];

console.table(meses);


const arreglo=['Cadena', 450, true, null, {NOMBRE:'Ronny', TRABAJO:'Programador'}, [1, 2, 3]];

console.log(arreglo);

//Acceder a los valores de un arreglo
console.log(numeros[4]);
console.log(numeros[2]);

//Conocer la extension de un arreglo
console.log(meses.length);

//Por cada elemento del arreglo se ejecuta esta funcion
numeros.forEach(function(numero){
    console.log(numero);
})