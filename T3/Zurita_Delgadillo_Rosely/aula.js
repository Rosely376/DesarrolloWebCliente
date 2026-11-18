class Aula{
    
    

    constructor( numero, equipos, puestos){
     
        this._numero = numero;
        this._equipos = equipos;
        this._puestos = puestos;
    }
 
    set numero (value){
        this._numero= value;
    }
    get numero(){
        return this._numero;
    }
    set equipos (value){
        this._equipos= value;
    }
    get equipos(){
        return this._equipos;
    }
    set puestos (value){
        this._puestos= value;
    }
    get puestos(){
        return this._puestos;
    }
    get posicion(){
            //recibe el identificador equipo, devuelve array con fila y columna , si no hay equipos devueleve null
            var fila = [];
            var columnas = []; 

        
    }
    get porcentaje(){
        //calculamos el porcentaje de ocupación del aula
        

    }
    activaEquipo(){
        //queremos insertar a un equipo la fila y columna que se le pasa 
      
        
    }

}