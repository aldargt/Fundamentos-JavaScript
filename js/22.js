const puntaje=100;

if(puntaje!=1000){
    console.log("El puntaje no es 1000");
}
else{
    console.log("El puntaje es 1000");
}

//-------------------------------------------------------------

const efectivo=1000;
const carrito=800;

if(efectivo>carrito){
    console.log("El usuario puede pagar");
}else{
    console.log("El usuario no puede pagar");
}

//--------------------------------------------------------------

const rol="EDITOR";

if(rol=='ADMINISTRADOR'){
    console.log('Tiene acceso a todo el sistema');
}
else if(rol=='EDITOR'){
    console.log('Tiene acceso a una parte del sistema');
}
else{
    console.log('No tienes acceso');
}