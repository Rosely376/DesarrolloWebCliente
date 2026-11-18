class Edificio{
    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle, numero, codigoPostal){
        this.calle = calle;
        this.nummero = numero;
        this.codigoPostal= codigoPostal;

    }

    get calle(){
        return this.#calle;
    }
    set calle(value){
        this.#calle=value;
    }

    get numero(){
        return this.#numero;
    }
    set numero(value){
        this.#numero= value;
        // if(numero > 0){
        //     this.#numero= this.#numero;
        // }else { 
        //     this.#numero =1;
        // }
    }

    get codigoPostal(){
        return this.#codigoPostal
    }

    set codigoPostal(value){
        this.#codigoPostal = value;
    }
     agregaPlantasYPuertas(nPlantas, nPuertas){
        //recibe el n de plantas y el numero de puertas
        
        // for(let i = 0; i<nPlantas; i++){
        //     this.#nPlantas[i] = new Array();
        //     for(let j = 0; j<nPuertas; j++){
        //         this.#nPuertas[j] = new Array();
        //     }
        // }

        //otra opción: 
        // for(var i=0 ; i < nPlantas; i++){
        //     this.#nPlantas.push(new Array (nPuertas).fill(null));
        // }


    }

    agregarPropietario(nombre, planta, puerta){
        //asignamos el propietario nombre a un piso identificado por planta y puerta antes debe de comprobar que existen
      // return this.agregarPropietario() + ` ${nombre} es propietario de la puerta ${puerta} de la planta ${planta}`;
        this.#plantas[planta][puerta] = Propietario;

    }

    imprimePlantas(plantas){
        //imprimer los propietario de cada piso

    }


}