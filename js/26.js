//This hace referencia a las propiedades del objeto sobre el cual se esta ejecuntando esa funcion

const reservacion={
    nombre: 'Ronny',
    apellido: 'Huarachi',
    total: 5000,
    pagado: false,
    informacion:function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();


//lo mismo de arriva sin usar el this (Ojo es mejor usar this creo)
const reservacion2={
    nombre: 'Aldar',
    apellido: 'Huarachi',
    total: 5000,
    pagado: false,
    informacion:function(){
        console.log(`El cliente ${reservacion2.nombre} reservo y su cantidad a pagar es de ${reservacion2.total}`);
    }
}

reservacion2.informacion();