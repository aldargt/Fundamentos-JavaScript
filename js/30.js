//PROMISE
/* En los PROMISES existen 3 valores:
Pending: No se ha cumplido pero tampoco se ha rechazado
Fulfilled: Ya se cumplio
Rejected: Se ha rechazado o no se pudo cumplir
*/

const usuarioAutenticado=new Promise((resolve, reject)=>{
    const autenticacion=true;
    if(autenticacion){
        resolve('Usuario Autenticado'); //EL PROMISE SE CUMPLE
    }else{
        reject('No se pudo iniciar secion');  //EL PROMISE NO SE CUMPLE
    }
});

usuarioAutenticado   //Sintaxis con arrow functions que es lo nuevo en JS
    .then(resultado=>console.log(resultado)) //then cuando esta cumpliendose el resolve
    .catch(error=>console.log(error)) //catch cuando se cumple el reject

//------------------------MISMO CODIGO DE ARRIVA LINEA 17 PERO SIN ARROW FUNCTIONS
/*usuarioAutenticado   //Formato anterior de JS
    .then(function(resultado){  //then cuando esta cumpliendose el resolve
        console.log(resultado);
    }) 
    .catch(function(error){   //catch cuando se cumple el reject
        console.log(error);
    })*/
