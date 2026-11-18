export class Equipo {
    #id;
    #fecha;
    #descripcion;
    #personal;

    constructor(descripcion, personal, dias) {
        this.#descripcion = descripcion;
        this.#personal = personal;
        this.#fecha = this.#calcularFecha(dias);   // primero la fecha...
        this.#id = this.#generarId();              // ...porque el id la necesita
    }

    // ---------- métodos privados ----------
    #calcularFecha(dias) {
        const hoy = new Date();

        // Si nos pasan días: hoy + días
        if (dias !== undefined && dias !== null) {
            const fin = new Date(hoy);             // copia, para no modificar "hoy"
            fin.setDate(hoy.getDate() + Number(dias));
            return fin;
        }

        // Si no: 30 de junio del curso actual (el curso empieza el 1 de septiembre)
        // getMonth() >= 8 -> septiembre (8) en adelante -> el curso acaba el año siguiente
        const anio = hoy.getMonth() >= 8 ? hoy.getFullYear() + 1 : hoy.getFullYear();
        return new Date(anio, 5, 30);              // mes 5 = junio
    }

    #generarId() {
        const tipo = this.#personal ? "P" : "S";
        const f = this.#fecha;
        const fechaTexto = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`;
        return `${tipo}-${this.#descripcion.slice(-3)}-${fechaTexto}`;
    }

    // ---------- getters y setters ----------
    get Id() { return this.#id; }
    get Fecha() { return this.#fecha; }
    get Descripcion() { return this.#descripcion; }
    get Personal() { return this.#personal; }

    // No hay setter de Id: se deriva de los otros campos
    set Fecha(valor) { this.#fecha = valor; this.#id = this.#generarId(); }
    set Descripcion(valor) { this.#descripcion = valor; this.#id = this.#generarId(); }
    set Personal(valor) { this.#personal = valor; this.#id = this.#generarId(); }

    toString() {
        return this.#id;
    }
}
