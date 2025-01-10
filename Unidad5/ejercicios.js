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
 