
//No es necesario meternos con resolver o rejected de Promise ya que Notification api ya lo tiene incorporado

const boton=document.querySelector('#boton');

boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado=>console.log('El resultado es: ',resultado))
});

if(Notification.permission=='granted'){
    new Notification('Esta es una notificacion',{
        icon: 'img/umss.png',
        body: 'Codigo con Juan, los mejores tutoriales',
    })
}