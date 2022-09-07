async function obtenerEmpleados(){
    const archivo='empleados.json';

    /*fetch(archivo)
        .then(resultado=>resultado.json())
        .then(datos=>{
            //console.log(datos.empleados)

            //Esta es la mejor forma de hacer con destructuring a diferencia de la linea 7
            const {empleados}=datos;
            //console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado);
                console.log(empleado.nombre);
            });
        });*/

    //ESTA ES OTRA FORMA DE USAR FETCH API PERO ESTA VEZ CON ASYNC AWAIT 
    const otraForma=await fetch(archivo);
    const otraFormaDatos=await otraForma.json();
    console.log(otraFormaDatos);
}

obtenerEmpleados();