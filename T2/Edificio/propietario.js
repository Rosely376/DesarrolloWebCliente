class Propietario{

    #nombre;
    #genero;
    #miembros;

    constructor(){

    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(valor){
        this.#nombre= valor
    }
    get genero(){
        return this.#genero;
    }

    set genero(valor){
        this.#genero= valor
    }
    get miembros(){
        return this.#miembros;
    }

    set miembros(valor){
        this.#miembros= valor
    }
    
}