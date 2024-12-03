
//CONSTRUCTORES


// crea una clase para modelar un objeto <telefono movil> que tenga al menos estas propiedades: CPU, RAM, Almacenamiento, Ancho, Alto y numCamaras. 
//Añade también un método llamado toString() que muestre en pantalla la información del objeto creado. Crea cuatro objetos con distintos numeros de 
//parámetros en la creación y muestra en pantalla la información de cada objeto. Hazlo con JavaScript


class TelefonoMovil {
    constructor(CPU = "Desconocido", RAM = "Desconocida", Almacenamiento = "Desconocido", Ancho = 0, Alto = 0, numCamaras = 0) {
      this.CPU = CPU;
      this.RAM = RAM;
      this.Almacenamiento = Almacenamiento;
      this.Ancho = Ancho;
      this.Alto = Alto;
      this.numCamaras = numCamaras;
    }
  
    toString() {
      return `Teléfono Móvil:
        CPU: ${this.CPU}
        RAM: ${this.RAM}
        Almacenamiento: ${this.Almacenamiento}
        Ancho: ${this.Ancho} 
        Alto: ${this.Alto} 
        Número de Cámaras: ${this.numCamaras}`;
    }
  }
  
  // cuatro objetos con disintos números de parámetros
  const telefono1 = new TelefonoMovil("Iphone 12 ", "8GB", "128GB", 75, 150, 3);
  const telefono2 = new TelefonoMovil("Galaxy J5", "6GB", "256GB", 71, 146); 
  const telefono3 = new TelefonoMovil("Xiomi Redmi 9", "12GB"); 
  const telefono4 = new TelefonoMovil(); 

  console.log(telefono1.toString());
  console.log(telefono2.toString());
  console.log(telefono3.toString());
  console.log(telefono4.toString());