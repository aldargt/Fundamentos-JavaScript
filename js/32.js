//Async / Await
function descargarNuevosClientes(){
    return new Promise(resolve=>{
        console.log('Decargando clientes... Espere...');

        setTimeout(()=>{ //SetTimeout funciona una vez a diferencia de SetInterval que esta abjo comentado
            resolve('Los clientes fueron descargados');
        },5000);
    });
}

function descargarNuevosPedidos(){
    return new Promise(resolve=>{
        console.log('Decargando pedidos... Espere...');

        setTimeout(()=>{ //SetTimeout funciona una vez a diferencia de SetInterval que esta abjo comentado
            resolve('Los pedidos fueron descargados');
        },3000);
    });
}

async function app(){
    try {
        //Esta forma toma mas tiempo(8 segundos) mientras el codigo de abajo toma menos y eso ayuda en el performance
        // const clientes= await descargarNuevosClientes();
        // const pedidos= await descargarNuevosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado=await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

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