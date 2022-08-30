//Declaracion de la funcion
function sumar(){
    console.log(10+10);
}

sumar();

//Expresion de la funcion
const sumar2=function(){
    console.log(3+3);
}

sumar2();

//IIFE este tipo de funciones se llaman solas y sirven para proteger que no se mezclen las variables o funciones de otros archivos .js
(function(){
    console.log(4+4);
})();