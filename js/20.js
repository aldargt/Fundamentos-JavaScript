//Metodos de propiedad
const reproductor={
    reproducir: function(id){
        console.log(`Reproduciendo la cancion: ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    crearPlayList: function(nombre){
        console.log(`Creando la Play List: ${nombre}`)
    },
    reproducirPlayList: function(nombre){
        console.log(`Reproduciendo la Play List: ${nombre}`)
    },
}

//Agregando al objeto reproductor
reproductor.borrarCancion=function(id){
    console.log(`Borrando la cancion numero ${id}`);
}

console.log(reproductor);
reproductor.reproducir(7);
reproductor.pausar();
reproductor.borrarCancion(2);
reproductor.crearPlayList('Electronica');
reproductor.reproducir('Legend');