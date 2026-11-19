import { Estacion } from "./estacion.js";

export class Meteorologia {
    #estaciones = new Map();      // clave: ciudad en mayúsculas -> valor: Estacion

    // Devuelve false si ya existe una estación en esa ciudad
    addEstacion(estacion) {
        const clave = estacion.Ciudad.toUpperCase();
        if (this.#estaciones.has(clave)) return false;
        this.#estaciones.set(clave, estacion);
        return true;
    }

    // Devuelve true si existía y se ha borrado
    eliminarEstacion(ciudad) {
        return this.#estaciones.delete(ciudad.toUpperCase());
    }

    getEstacion(ciudad) {
        return this.#estaciones.get(ciudad.toUpperCase()) || null;
    }

    modificarTemperatura(ciudad, dia, valor) {
        const estacion = this.getEstacion(ciudad);
        return estacion !== null && estacion.modificarTemperatura(dia, valor);
    }

    // Tabla completa: cabecera (1..30, Media) + una fila por ciudad
    toHTML() {
        const dias = Array.from({ length: Estacion.DIAS }, (_, i) => `<th>${i + 1}</th>`).join("");
        const filas = [...this.#estaciones.values()].map(e => e.toHTML()).join("");
        return `<table><tr><th></th>${dias}<th>Media</th></tr>${filas}</table>`;
    }
}
