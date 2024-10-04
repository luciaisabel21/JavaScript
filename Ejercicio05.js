let number;
let suma = 0;

do {
    number = prompt("Introduce un número: ");
    number = Number(number);
} while (isNaN(number));

for(let i = 1; i<= number; i++) {
    suma += i; 
}

alert (suma);