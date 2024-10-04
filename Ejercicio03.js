let a;
let b;

while(true) {
    a = prompt("Introduce el primer numero (a)");
    a = Number(a);

    if(isNaN(a)) {
        alert("Error , introduzca un numero");

    }else {
        console.log("Numero válido" + a);
        break;
    }
}

while (true) {
    b = prompt("Introduce otro numero (b)");
    b = Number(b);

    if(isNaN(a)) {
        alert("Error , introduzca un numero");

    }else {
        console.log("Numero válido" + b);
        break;
    }
}

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

