
//switch

const metodoPago="Efectivo";

switch(metodoPago){
    case "Tarjeta":
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case "Cheque":
        console.log(`Pagaste con cheque`);
        break;
    case "Efectivo":
        console.log(`Pagaste conefectivo`);
        break;
    default:
        console.log('Aun no has pagado');    
        break;
}