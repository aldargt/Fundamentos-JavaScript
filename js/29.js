//try catch usarlo solo en situaciones criticas por ejemplo si un usario pudo iniciar secion o no, si una coneccion a BD se pudo o no,
//o si un pago se pudo completar o no

const numero1=10;
const numero3=20;

console.log(numero1);
try {
    console.log(numero2);
} catch (error) {
    console.log(error);
}
console.log(numero3);