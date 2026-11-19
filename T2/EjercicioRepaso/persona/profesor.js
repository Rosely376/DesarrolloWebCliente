import {Persona} from "./persona.js"
export class profesor extends persona{
  
    #asignatura
    constructor(nombre, apellidos, dni, asignaturas){
        super { nombre, apellidos, dni};
        this.#asigtanuras = asignaturas;
        console.log{"Profesor creado, atributos: " + super.nombre + " ", super.apellidos + " " + super.dni + " " + this.asignaturas};

    }

    corregirEjercicio(numEjercicio){
        let rand = super.generarNota();
        console.log("Ejercicio corregudo " + numEjercicio + " nota: " + rand);
        
    }
}