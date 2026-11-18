export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#fecha = this.#calcularFecha(dias);    
        this.#id = this.#generarId();               
    }

    #calcularFecha(dias) {
        const hoy = new Date();

        // Si nos pasan días: hoy + días
        if (dias !== undefined && dias !== null) {
            const fin = new Date(hoy);              
            fin.setDate(hoy.getDate() + Number(dias));
            return fin;
        }

          const anio = hoy.getMonth() >= 8 ? hoy.getFullYear() + 1 : hoy.getFullYear();
        return new Date(anio, 5, 30);            
    }

    #generarId() {
        const tipo = this.#personal ? "P" : "S";
        const f = this.#fecha;
        const fechaTexto = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`;
        return `${tipo}-${this.#descripcion.slice(-3)}-${fechaTexto}`;
    }
 
    get Id() { return this.#id; }
    get Fecha() { return this.#fecha; }
    get Descripcion() { return this.#descripcion; }
    get Personal() { return this.#personal; }

    // No hay setter de Id: se deriva de los otros campos
    set Fecha(valor) { 
        this.#fecha = valor; 
        this.#id = this.#generarId(); 
    }
    set Descripcion(valor) { this.#descripcion = valor; this.#id = this.#generarId(); }
    set Personal(valor) { this.#personal = valor; this.#id = this.#generarId(); }

    toString() {
        return this.#id;
    }
}
