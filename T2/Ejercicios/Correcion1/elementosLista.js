export class ElementoLista{
    ciudadAutonoma=[];

    constructor(ciudadAutonoma, provincias = []){

    }
    get ciudadAutonoma(){
        return this.#ciudadAutonoma;
    }
    get provincias(){
        return this.#provincias;
    }
    toString(){
        return '${this.#ciudadAutonoma} - ${this.#provincias.join(" , ")}';
    }
    pintaString(){
        console.log(this.toString()) ;
    }

}//