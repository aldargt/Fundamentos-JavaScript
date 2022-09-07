//Async / Await
function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Decargando clientes... Espere...');

        setTimeout(()=>{ //SetTimeout funciona una vez a diferencia de SetInterval que esta abjo comentado
            resolve('Los clientes fueron descargados');
        },5000);
    });
}
async function app(){
    try {
        const resultado= await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();

console.log('Este codigo no se bloquea...');

// ESTE CODIGO ACTUA CADA 3 SEGUNDOS
//setInterval(function(){
//     console.log('Paso 3 segundos...');
// }, 3000);