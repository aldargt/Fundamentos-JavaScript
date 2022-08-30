
function sumar(numero1=0, numero2=0){  //numero1 y numero2 son parametros --- Los parametros por default en este caso son 0
    console.log(numero1+numero2);
}

sumar(10,10); //10, 1 son los argumentos o los valores reales
sumar(5,5);
sumar(2,2);
sumar(1); //Aqui toma el parametro por default ya que solo manda un argumento


const sumar2=function(numero1, numero2){
    console.log(numero1+numero2);
}

sumar2(100,200);