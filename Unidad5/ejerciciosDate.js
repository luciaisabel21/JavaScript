//Ejercicios Date

//Ejercicio 1
// Crea un programa que obtenga la fecha y hora actuales y las muestre en el formato:
//Día/Mes/Año Hora:Minuto:Segundo.
function obtenerFechaYHoraActual() {
    const ahora = new Date();

    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1;
    const ano = ahora.getFullYear();

    const hora = ahora.getHours();
    const minuto = ahora.getMinutes();
    const segundo = ahora.getSeconds();

   
    const fechaYHora = `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

    return fechaYHora;
}


console.log(obtenerFechaYHoraActual());

//Ejercicio 2
// Escribe una función que reciba una fecha en formato AAAA-MM-DD y devuelva el día de la semana correspondiente.

function obtenerDiaDeLaSemanaDesdeFecha(fechaString) {
    const fecha = new Date(fechaString);
    const diasDeLaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    
    const diaDeLaSemana = fecha.getDay();

    return diasDeLaSemana[diaDeLaSemana];
}


console.log(obtenerDiaDeLaSemanaDesdeFecha("2024-7-11")); 

//Ejercicio 3
// Crea un programa que calcule cuántos días hay entre dos fechas dadas en formato AAAA-MM-DD.


//Ejercicio 4
// Escribe una función que reciba una fecha y un número de días, y devuelva la nueva fecha con los días sumados.

function sumaDias(date, days) {
    const resultDate = new Date(date);
    resultDate.setDate(resultDate.getDate() + days);
    return resultDate;
}


const fechaInicial = new Date('2024-12-11');
const diasASumar = 30;
const nuevaFecha = sumaDias(fechaInicial, diasASumar);

console.log(nuevaFecha.toISOString().split('T')[0]);  

//Ejercicio 5
// Escribe una función que verifique si una fecha introducida como string es válida o no

function fechaValida(dateString) {
    const fecha = Date.parse(dateString);
    return !isNaN(fecha);
}


console.log(fechaValida('2024-12-11'));  
console.log(fechaValida('2024-02-30')); 

//Ejercicio 6
//Escribe un programa que calcule la diferencia en horas y minutos entre dos fechas y horas dadas.

function calcularDiferencia(fechaInicio, fechaFin) {
    const diferencia = fechaFin.getTime() - fechaInicio.getTime(); 

    const horas = Math.floor(diferencia / (1000 * 60 * 60));  // Convertir a horas
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));  // Obtener los minutos restantes

    return { horas, minutos };
}


const fechaInicio = new Date('2024-12-11T08:00:00');
const fechaFin = new Date('2024-12-11T18:45:00');
const result = calcularDiferencia(fechaInicio, fechaFin);

console.log(`${result.horas} horas y ${result.minutos} minutos`); 

//Ejercicio 7
//Escribe una función que reciba un año y determine si es bisiesto. 

function esBisiesto() {
        if (year % 4 !== 0) return false;  
        if (year % 100 !== 0) return true;  
        if (year % 400 !== 0) return false; 
        return true; 
    }
    
    console.log(esBisiesto(2024));  
    console.log(esBisiesto(1900));  
    console.log(esBisiesto(2000)); 

//Ejercicio 8
//Crea una función que reciba un mes (1-12) y un año, y devuelva el número de días que tiene ese mes

function diasEnMes(mes, ano) {
    
   // Verificar si el mes es válido
    if (mes < 1 || mes > 12) {
        return "Mes inválido";
    }
    // Calcular el número de días en el mes
    let dias;
    if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        dias = 31;
    } else if ([4, 6, 9, 11].includes(mes)) {
        dias = 30;
    } else if (mes === 2) {
        // Verificar si el año es bisiesto
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            dias = 29;
        } else {
            dias = 28;
        }
    }
    return dias;
}


console.log(diasEnMes(2, 2024));  // Output: 29 (año bisiesto)

//Ejercicio 9
// Escribe un programa que convierta una fecha en formato AAAA-MM-DD a un formato legible como: Miércoles, 25 de Diciembre de 2024.

function convertirFecha(formatoFecha) {
    
    // Crear una instancia de Date utilizando la fecha proporcionada
    const fecha = new Date(formatoFecha);
    // Arreglos para los nombres de los días y meses
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // Obtener el nombre del día, día del mes, nombre del mes y año
    const diaSemana = diasSemana[fecha.getDay()];
    const diaDelMes = fecha.getDate();
    const mes = meses[fecha.getMonth()];
    const anio = fecha.getFullYear();

   
    return `${diaSemana}, ${diaDelMes} de ${mes} de ${anio}`;
}


console.log(convertirFecha('2024-12-25'));   // Output: Miércoles, 25 de Diciembre de 2024