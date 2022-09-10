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
//----------------------------------------------------------------------------------------------------------------------
const producto={
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 200,
    disponible: false,
}

//Forma Anterior de sacar propiedades de un objeto y asignarlos en una nueva variable
//const precioProducto=producto.precio;
//const nombreProducto=producto.nombreProducto;



// Destructuring Nueva forma de sacar propiedades de un objeto y asignarlos en variables
const {disponible}=producto;
const {precio, nombreProducto}=producto;

console.log(disponible);
console.log(precio);
console.log(nombreProducto);