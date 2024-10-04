let a;
let b;
let option;
let resultado;

do {
    a = prompt("Introduce un numero: ");
    a = Number(a);
}while (isNaN(a));

do {
    b =  prompt("Introduce otro numero: ");
    b = Number(b);
    }while (isNaN(b));

    
    let operacion =  prompt("¿Qué operación deseas realizar? (+, -, *, /)");

    switch (operacion) {
        case 1:
            suma = a +  b;
            alert ("El resultado es  " + suma);
            break;
        case 2:
            resta = a - b;
            alert ("El resultado es " + resta);
            break;
        case 3:
            multipicacion = a * b;
            alert ("El resultado es " + multipicacion);
            break;
        case 4: 
            division = a / b;
            alert ("el resultado es " + division);
            break;
    
            default:
                alert("La operacion no se reconoce");
    
    
    }