// const EQUIPO = {
//     id,
//     fecha,
//     descripcion,
//     personal: true 
// };

class Equipo{
    constructor( id,fecha, descripcion, personal){
        this._id = id;
        this._fecha = fecha;
        this._descripcion = descripcion;
        this._personal = personal;
    }

    set id (value){
        this._id= value;
    }
    get id(){
        return this._id;
    }
    set fecha (value){
        this._fecha= value;
    }
    get fecha(){
        return this._fecha;
    }
    set descripcion (value){
        this._descripcion= value;
    }
    get descripcion(){
        return this._descripcion;
    }
    set personal (value){
        this._personal= value;
    }
    get personal(){
        return tipoEquipo();
        
    }   
    tipoEquipo(){
        if (this.personal==true){
            console.log("personal");
        }else{
            console.log("sobremesa");
        }
    }

    
    formatoId (){
        //FORMATO: x-ZZZ-dd--mm-yyyy
        
    }

}


