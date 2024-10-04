let a;
let b;
let resultado = 1;

do {
    a = prompt("Introduce un numero: ");
    a= Number(a);

} while (isNaN(a));

do {
    b = prompt("Introduce un numero: "  );
    b = Number(b);

} while (isNaN(b));

for(let i = 1; i<= b; i++) {
    resultado *= (a * i);
}

console.log("El resultado es " + resultado);