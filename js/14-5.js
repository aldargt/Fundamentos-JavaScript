// Arreglos y Arrays

const numeros=[10,20,30,40,50];

//Agregar elementos a un arreglo o modificarlos (Forma no muy comun)
numeros[5]=60;
numeros[2]='modificado';

//Agregar elementos a un arreglo al final (Usando push) Lo agrega al final del arreglo
numeros.push(70);
numeros.push(80,90,100);

//Agregar elementos a un arreglo al inicio (Usando unshift) Lo agrega al inicio del arreglo
numeros.unshift(-10);
numeros.unshift(-20,-30,-40);

console.table(numeros);



const meses=['Enero','Febrero','Marzo','Abril','Mayo'];

meses.pop(); //elimina el ultimo elemento del arreglo
meses.shift(); //elimina el primer elemnto del arreglo
meses.splice(1,1);//eliminar un elemnto del arreglo de acuerdo a su posicion. 1er parametro=posicion  2doparametro=a partir de la posion 
                                                                                                      //cuantos posiciones mas quieres eliminar
console.table(meses);

//Rest operator o spread operator (Esta es la forma mas comun hoy en dia) si quieres agregar un nuevo elemento se tiene que agregar en otro arreglo
const meses1=['Enero','Febrero','Marzo','Abril','Mayo'];

const nuevoArreglo1=[...meses1,"Junio"];  //Agrega el elemento al final
console.table(nuevoArreglo1);

const nuevoArreglo2=["Junio",...meses1];  //Agrega el elemento al inicio
console.table(nuevoArreglo2);