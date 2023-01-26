//import { CONEXION } from "./conexion.enum";


export class Contacto {
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;
    //conexion = CONEXION;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
        //this.conexion = conexion;
    }

}