/*const producto="Monitor de 20 pulgadas";
const producto2=String("Monitor de 30 pulgadas");
const producto3=new String("Monitor de 50 pulgadas");

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(typeof producto); //typeof sirve para saber que tipo de variable es
console.log(typeof producto3);*/

//String o cadenas de texto
const tweet='Aprendiendo JavaScript con el curso de desarrollo web completo';
const producto2='Monitor HD"';
const email='correo@correo.com';

//length
console.log(tweet.length); //Conocer la extension de la cadena
console.log(producto2);

//indexOf te avisa en que posicion se encuentra un texto que estas buscando
console.log(tweet.indexOf("JavaScript"));
console.log(producto2.indexOf("Tablet"));
console.log(email.indexOf("@"));

//includes te avisa si encuentra la palabra que estas buscando con true o false
console.log(tweet.includes("JavaScript"));
console.log(producto2.includes("Tablet"));