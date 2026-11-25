
//podemos escoger entre derrape o mecanica 
export class Pilotos{
    #nombre
    #apelllidos
    #especialiad 

constructor(nombre, apellidos, especialidad){
    this._nombre=nombre;
    this._apellidos=apellidos;
    this._especialidad= especialidad;
}

    set nombre (value){
        this._nombre= value;
    }
    get nombre(){
        return this._nombre;
    }
    set apellidos(value){
        this._nombre;
    } 
    get apellidos(){
        return this._nombre;
    }
    set especialidad(value){
        this._especialidad;
    }
    get especialidad(){
        return this.especialidad
    }


    infracciones(){
    
    }
    premios(premio){ 
        
        
    }

    esValido(){
    if(Pilotos != Pilotos ){
        console.log("El piloto " + nombre + "es: " +  "valido");
    }else{
        console.log("El piloto no es valido ")
    }
    }
  
 }
