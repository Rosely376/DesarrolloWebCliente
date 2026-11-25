import { Piloto } from "./Piloto.js";
export class Equipo{
    Piloto= new Piloto();
    #lema;

    
    nombreClave(nombre, apellidos){
        var nombreClave= 
    
    }
    matricula(lema){
 
    }
    nivelBusqueda(infraccion){
    var contInfracciones;  
    if(infraccion == "exceso de velocidad" || infraccion== "saltarse un semáforo"){
        contInfracciones++;
    }else if(infraccion == "conduccion temeraria"){
        contInfracciones+2;
    }
    }
    permioNeto(premio){
        var premioNeto;
        if(premio > 5000){
              premioNeto= premio-0.2;
            };
        console.log(premioNeto);
    }

    mostrarEquipo(){
        
    }

}
