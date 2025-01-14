//Ejercicios pagina 184

//CAMPOS PRIVADOS*/
/* 5.18. Crea una clase con dos propiedades y dos métodos donde se eviencien los conceptos de abstacción
y encapsulamiento de la programación orientada a objetos */

class CuentaBancaria {
    #saldo;
    #numeroCuenta;

    constructor(numeroCuenta, saldoInicial) {
        this.#numeroCuenta = numeroCuenta;
        this.#saldo = saldoInicial;
    }
    getSaldo() {
        return this.#saldo;
        }
    getNumeroCuenta() {
        return this.#numeroCuenta;
    }
    setSaldo() {
        this.#saldo = saldo;
    }
    setNumeroCuenta() {
        this.#numeroCuenta = numeroCuenta;
    }

    depositar(cantidad) {
        if (cantidad > 0) {
            this.#saldo += cantidad;
            console.log(`Depósito realizado: $${cantidad}. Nuevo saldo: $${this.#saldo}`);
        } else {
            console.log("La cantidad a depositar debe ser positiva.");
        }
    }

    
    consultarSaldo() {
        console.log(`El saldo actual de la cuenta ${this.#numeroCuenta} es: $${this.#saldo}`);
    }
}


const cuenta = new CuentaBancaria("123456789", 1000);

// Realizar operaciones con métodos públicos
cuenta.depositar(500); // Salida: Depósito realizado: $500. Nuevo saldo: $1500
cuenta.consultarSaldo(); // Salida: El saldo actual de la cuenta 123456789 es: $1500

/* 5.19. Escribe un programa con herencia de clases que permita modelar loso objetos Teléfono,Fijo y Móvil, de manera que
Teléfono sea la clase padre y Fijo y Móvil, clases derivadas*/

class Telefono {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }


    llamar(numero) {
        console.log(`Llamando al número ${numero} desde un ${this.marca} ${this.modelo}...`);
    }
}

 
class Fijo extends Telefono {
    constructor(marca, modelo, tipoLinea) {
        super(marca, modelo); 
        this.tipoLinea = tipoLinea; 
    }

    conectarLinea() {
        console.log(`Conectando el teléfono fijo ${this.marca} ${this.modelo} a una línea ${this.tipoLinea}.`);
    }
}

class Movil extends Telefono {
    constructor(marca, modelo, operador) {
        super(marca, modelo);
        this.operador = operador; 
    }

    
    enviarMensaje(numero, mensaje) {
        console.log(`Enviando mensaje al ${numero} desde un ${this.marca} ${this.modelo} (${this.operador}): "${mensaje}"`);
    }
}


const telefonoFijo = new Fijo("Panasonic", "KX-TS500", "analógica");
telefonoFijo.llamar("555-1234"); 
telefonoFijo.conectarLinea(); 

const telefonoMovil = new Movil("Samsung", "Galaxy S22", "Movistar");
telefonoMovil.llamar("987-6543"); 
telefonoMovil.enviarMensaje("987-6543", "Hola, ¿cómo estás?"); 

/* 5.20. Diseña una jerarquía de clases donde Música y Tecnologia sean clases derivadas de Aula,
para modelar las instalaciones de un instituto de enseñanza secundaria. Elige un método con el que evidenciar
el concepto del polimorfismo */

class Aula {
    constructor(nombre) {
        this.nombre = nombre;
    }

    descripcion() {
        return `Aula genérica llamada ${this.nombre}.`;
    }
}

class Musica extends Aula {
    constructor(nombre, instrumentos) {
        super(nombre);
        this.instrumentos = instrumentos;
    }

    descripcion() {
        return `Aula de Música llamada ${this.nombre}, equipada con los siguientes instrumentos: ${this.instrumentos.join(', ')}.`;
    }
}

class Tecnologia extends Aula {
    constructor(nombre, equipos) {
        super(nombre);
        this.equipos = equipos;
    }

    descripcion() {
        return `Aula de Tecnología llamada ${this.nombre}, equipada con los siguientes equipos: ${this.equipos.join(', ')}.`;
    }
}

// Ejemplo de uso para evidenciar el polimorfismo
const aulaGeneral = new Aula("Aula 101");
const aulaMusica = new Musica("Aula de Música 202", ["piano", "guitarra", "batería"]);
const aulaTecnologia = new Tecnologia("Laboratorio de Tecnología 303", ["ordenadores", "impresoras 3D", "robotics kits"]);

// Lista de aulas
const aulas = [aulaGeneral, aulaMusica, aulaTecnologia];

// Mostrar descripciones utilizando polimorfismo
aulas.forEach((aula) => {
    console.log(aula.descripcion());
});
 

/* 5.22 crea una clase en la que demuestres el uso de this*/


class Persona {
    constructor(nombre = 'Desconocido', edad = 0) {
      this._datos = {
        nombre: nombre,
        edad: edad,
      };
    }
  
    get nombre() {
      return this._datos.nombre;
    }
  
    set nombre(nuevoNombre) {
      this._datos.nombre = nuevoNombre;
    }
    get edad() {
      return this._datos.edad;
    }

    set edad(nuevaEdad) {
      this._datos.edad = nuevaEdad;
    }
    mostrarDatos() {
      console.log(`Nombre: ${this._datos.nombre}, Edad: ${this._datos.edad}`);
    }
  }
  
  const persona = new Persona('Juan', 30);

  persona.mostrarDatos(); 


  /*  /* Construye un onjeto partiendo de OBject y modificalo al vuelo para modelar una matriz.
Sus propiedades serán nFilas, nColumnas y contenido, y sus métodos inicializarMAtriz(valor),
que rellena toda la amtriz con el mismo valor, aleatoriaMAtriz(), que rellana la matriz con 
enteros aleatorios entre 1 y 100, y verMatriz() que la muestra mos consola */inicializarMatriz(valor) {
    const matriz = Object.create({
        nFilas: 0,
        nColumnas: 0,
        contenido: [],
    
        inicializarMatriz(valor) {
            this.contenido = Array.from({ 
                length: this.nFilas }, () => Array(this.nColumnas).fill(valor));
        },
    
        aleatoriaMatriz() {
            this.contenido = Array.from({ length: this.nFilas }, () =>
                Array.from({ length: this.nColumnas }, () => Math.floor(Math.random() * 100) + 1)
            );
        },
    
        verMatriz() {
            for (const fila of this.contenido) {
                console.log(fila);
            }
        }
    });
    
    
    matriz.nFilas = 3; 
    matriz.nColumnas = 4; 
    
    
    matriz.inicializarMatriz(5);
    console.log("Matriz inicializada con valor 5:");
    matriz.verMatriz();
    
    
    matriz.aleatoriaMatriz();
    console.log("\nMatriz rellena con valores aleatorios:");
    matriz.verMatriz();
}


/* Escribe un programa que haga uso de la clase Club, para modelar un club de futbol que contenga las propiedades
añoFunción, nunSocios, nombreEstadio, ciudad y palmarés (de cada titulo debe almacenar su nombre y año de consecución). 
Elige los tipos de datos que consideres más útiles en cada caso. Debe contener un único método, versiónClub(), que muestre
toda la información contenida en sus propiedades. Crea sesis objetos, de manera que el primero ejecute el constuctor sin parámetros
, el segundo con un parámetro, el tercero con dos parámetros, y así sucesivamente hasta el sexto con cinco parámetros. 
Realiza un recorrido de cada objeto asegurándote de que en cada recorrido modificas el contenido de alguna propiedad.*/

class Club {
    constructor(añoFuncion = 0, numSocios = 0, nombreEstadio = "", ciudad = "", palmares = []) {
        this.añoFuncion = añoFuncion;
        this.numSocios = numSocios;
        this.nombreEstadio = nombreEstadio;
        this.ciudad = ciudad;
        this.palmares = palmares; // Palmares es un array de objetos {nombre: string, año: number}
    }

    // Método para mostrar la información del club
    versionClub() {
        console.log(`Año de Fundación: ${this.añoFuncion}`);
        console.log(`Número de Socios: ${this.numSocios}`);
        console.log(`Nombre del Estadio: ${this.nombreEstadio}`);
        console.log(`Ciudad: ${this.ciudad}`);
        console.log("Palmarés:");
        if (this.palmares.length > 0) {
            this.palmares.forEach((titulo, index) => {
                console.log(`  ${index + 1}. ${titulo.nombre} (${titulo.año})`);
            });
        } else {
            console.log("  No tiene títulos.");
        }
        console.log("-----------------------------");
    }
}

// Creación de los objetos
const club1 = new Club();
const club2 = new Club(1902);
const club3 = new Club(1899, 200000);
const club4 = new Club(1905, 100000, "Estadio Santiago Bernabéu");
const club5 = new Club(1928, 80000, "Camp Nou", "Barcelona");
const club6 = new Club(1878, 90000, "Old Trafford", "Manchester", [
    { nombre: "Premier League", año: 2021 },
    { nombre: "FA Cup", año: 2016 }
]);

// Modificación de propiedades y recorrido de objetos
const clubes = [club1, club2, club3, club4, club5, club6];

clubes.forEach((club, index) => {
    console.log(`Club ${index + 1}`);
    // Modificar alguna propiedad
    club.numSocios += 1000; // Incrementar el número de socios
    if (index === 2) {
        club.palmares.push({ nombre: "Champions League", año: 2009 });
    }
    if (index === 4) {
        club.ciudad = "Nueva Ciudad";
    }
    // Mostrar información del club
    club.versionClub();
});