// 1.2. Función para verificar si un número es par
//Escribe una función llamada esPar que reciba un número como parámetro y devuelva true si el
// número es par, y false si es impar.


function esPar (numero){
    if (numero%2==0){
        return true;
    } else {
        return false;
    }
}

console.log(esPar(4));
console.log(esPar(3));

// 2.2. Función para determinar si un número es positivo o negativo
//Crea una función por expresión llamada determinarSigno que reciba un número como
//parámetro y devuelva "positivo" si el número es mayor que cero, "negativo" si es menor que
// cero, y "cero" si es igual a cero.

const determinarSigno = function determinar (numero) {
    if (numero > 0) {
        return "positivo";
    }else if (numero < 0) {
        return "negativo";
        }else {
            return "cero";
            }
}

console.log(determinarSigno(5));
console.log(determinarSigno(-7));
console.log(determinarSigno(0));

//3.2. Función para verificar si un número es impar
//Crea una función por expresión anónima llamada esImpar que reciba un número como
//parámetro y devuelva true si el número es impar y false si es par

const esImpar = function (numero) {
    if (numero%2!=0){
        return true;
    }else {
        return false;
    }
}

console.log(esImpar(5));
console.log(esImpar(4));
console.log(esImpar(0));