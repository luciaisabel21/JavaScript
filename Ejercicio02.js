let a = prompt("Introuzca un número");
let b = prompt("Introuzca otro número");

number(a);
number(b);


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






