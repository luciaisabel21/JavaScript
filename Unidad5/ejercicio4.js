//Herencia


class Producto {
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    mostrarDetalles() {
        console.log(`El producto ${this.nombre} cuesta ${this.precio}`);}
    }
    class Libro extends Producto {
        constructor(nombre, precio, autor) {
            super(nombre, precio);
            this.autor = autor;
    }  
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`y su autor es ${this.autor}`);}
    }
    class Camiseta extends Producto {
        constructor(nombre, precio, talla) {
            super(nombre, precio);
            this.talla = talla;
    }  
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(` y su talla es ${this.talla}`);}
    }

    class Videojuego extends Producto {
        constructor(nombre, precio, genero) {
            super(nombre, precio);
            this.genero = genero;
    }  
    mostrarDetalles() {
        super.mostrarDetalles();
        console.log(`y su genero es ${this.genero}`);}
    }

    let libro = new Libro("El señor de los anillos", 20, "Tolkien");
    libro.mostrarDetalles();
    let camiseta = new Camiseta("Sudadera", 15, "S");
    camiseta.mostrarDetalles();
    let videojuego = new Videojuego("Los Simps", 30, "Simulador");
    videojuego.mostrarDetalles(); 
    