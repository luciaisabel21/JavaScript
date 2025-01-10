//Ejercicio 1
/*Enunciado: Crea una función llamada calcularHipotenusa que reciba dos números representando los catetos
de un triángulo rectángulo y devuelva la longitud de la hipotenusa*/
function calcularHipotenusa(cateto1, cateto2) {
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)); 
    return hipotenusa;
}

const cateto1 = 3;
const cateto2 = 4;
console.log("La hipotenusa es:", calcularHipotenusa(cateto1, cateto2)); // 5


/*Ejercicio 2: Redondeo al entero más cercano
Enunciado: Crea una función llamada redondear que reciba un número decimal y devuelva su valor
redondeado al entero más cercano. */

function redondear(numero) {
    return Math.round(numero);
}


const numero1 = 4.7;
const numero2 = 4.3;

console.log("El número 4.7 redondeado es:", redondear(numero1)); 
console.log("El número 4.3 redondeado es:", redondear(numero2)); 

/* Ejercicio 3: Números aleatorios dentro de un rango
Enunciado: Crea una función llamada numeroAleatorioEnRango que reciba dos números (mínimo y máximo)
y devuelva un número aleatorio dentro de ese rango (incluyendo ambos extremos) */

function numeroAleatorioEnRango(minimo, maximo) {
    return Math.random() * (maximo - minimo) + minimo;
    }
    const minimo = 5;
    const maximo = 10;
    
    console.log("Número aleatorio entre 5 y 10:", numeroAleatorioEnRango(minimo, maximo));

/* Ejercicio 4: Calcular el área de un círculo
Enunciado: Crea una función llamada calcularAreaCirculo que reciba el radio de un círculo y devuelva su
área. Usa Math.PI. Fórmula area = PI x r2*/
function calcularAreaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
    }
    const radio = 5;
    console.log("El área del círculo con radio 5 es:", calcularAreaCirculo(radio));

/* Ejercicio 5: Convertir grados a radianes
Enunciado: Crea una función llamada convertirGradosARadianes que reciba un ángulo en grados y lo
convierta a radianes. */
function convertirGradosARadianes(grados) {
    return grados * Math.PI / 180;
    }
    const grados = 180;
console.log(`180 grados en radianes es: ${convertirGradosARadianes(grados)}`);


/* Ejercicio 6: Calcular el número máximo y mínimo en un array
Enunciado: Crea dos funciones, encontrarMaximo y encontrarMinimo, que reciban un array de números y
devuelvan, respectivamente, el número más grande y el más pequeño del array. */

function encontrarMaximo(array) {
    return Math.max(...array);
}

function encontrarMinimo(array) {
    return Math.min(...array);
}


const numeros = [3, 7, 2, 9, 5, -1, 12];

console.log("El número máximo es:", encontrarMaximo(numeros)); 
console.log("El número mínimo es:", encontrarMinimo(numeros)); 

/* Ejercicio 7: Calcular la longitud de una circunferencia
Enunciado: Crea una función llamada calcularLongitudCircunferencia que reciba el radio de una
circunferencia y devuelva su longitud. Usa la fórmula L=2⋅π⋅r.*/
function calcularLongitudCircunferencia(radio) {
    return 2 * Math.PI * radio1;
}
const radio1 = 5;
console.log(`La longitud de la circunferencia con radio 5 es: ${calcularLongitudCircunferencia(radio).toFixed(2)}`);

/* Ejercicio 8: Aproximación al valor de e^x
Enunciado: Crea una función llamada aproximarExp que reciba un número x y calcule e^x utilizando
Math.exp.  */
function aproximarExp(x) {
    return Math.exp(x);
}
console.log("Aproximación de e^2:", aproximarExp(2));

/* Ejercicio 10: Número aleatorio entre 0 y 1 con decimales truncados
Enunciado: Crea una función llamada aleatorioTruncado que genere un número aleatorio entre 0 y 1 (incluye
decimales) y lo trunque a 3 decimales. */

function aleatorioTruncado() {
    const numero = Math.random();
    return Math.floor(numero * 1000) / 1000;
}


console.log("Número aleatorio entre 0 y 1 truncado a 3 decimales:", aleatorioTruncado());


/*Ejercicio 11: Generar un número aleatorio impar en un rango
Enunciado: Crea una función llamada numeroImparAleatorio que reciba dos números (mínimo y máximo) y
genere un número aleatorio impar dentro de ese rango */

function numeroImparAleatorio(minimo, maximo) {
    let numero;
    do {
        numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    } while (numero % 2 === 0);
    return numero;
}

// Ejemplo de uso
const min = 1;
const max = 10;
console.log(`Número impar aleatorio entre ${min} y ${max}:`, numeroImparAleatorio(min, max));


