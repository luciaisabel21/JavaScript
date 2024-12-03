//Herencia y polimorfismo

class Miembro {
    nombre="nombre apellido1 apellido2";
    alta = "01/01/2022";
    estado ="vigente";
    constructor(nombre,alta,estado){
        this.nombre=nombre;
        this.alta=alta;
        this.estado=estado;
}
cobrar() {
    console.log(`El miembro ${this.nombre} ha cobrado`);}
    }
class Profesor extends Miembro{
    nAlumnos =0;
    constructor(nombre, alta,estado,nAlumnos){
        super(nombre,alta,estado);
        this.nAlumnos=nAlumnos;
        }
        cobrar(){
            console.log(`El profesor ${this.nombre} ha cobrado`);}
            }
class Alumno extends Miembro{
    nAsignaturas =0;
    constructor(nombre,alta,estado,nAsignaturas){
        super(nombre,alta,estado);
        this.nAsignaturas=nAsignaturas;
        }
        cobrar(){
            console.log(`El alumno ${this.nombre} ha cobrado`);}
            }
let unMiembro = new Miembro("Juan Perez Lopez","01/01/2022","finalizado");
unMiembro .cobrar();
let unProfesor = new Profesor("Samuel Orta","25/06/2021","finalizado",30);
unProfesor .cobrar();
let unAlumno = new Alumno("Ismael Medina","02/11/2005", "finalizado", 20);
unAlumno .cobrar(); 

