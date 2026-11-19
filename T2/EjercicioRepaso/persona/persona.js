//Realiza un programa que genere un objeto de tipo de Persona con nombre, apellidos, dni y dos clases
//que hereden de ella, Estudiante y Profesor.

//Estudiante tiene como atributo un array de asignaturas que recibe y el profesor un array de asignatura
//que imparte. En el constructor escribe un mensaje de "He sido creado y mis atributos son..."

//Estudiantes tenemos un método que entrega un ejercicio y el profesor un método que corrige ejercicio. 
//Simplemente muestran un mensaje con la acción y el número del ejercicio que ha sido pasado por 
//parámetro y la nota.

//Crea dos profesores  y 4 alumnos. Cada alumno entrega un ejercicio a cada profesor. Muestra cada
//accion por pantalla (html)


class persona{
    #nombre
    #apellidos
    #dni 


    cosntructor(nombre, apellidos, dni){
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#dni = dni
    }

    get nombre(){
        return this.#nombre
    }
    set nombre(value){
        this.#nombre= value;
    }
    get apellidos(){
        return this.#nombre
    }
    set apellidos(value){
        this.#apellidos= value;
    }
    get dni(){
        return this.#dni
    }
    set dni(value){
        this.#dni= value;
    }

}