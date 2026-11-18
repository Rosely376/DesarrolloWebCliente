export class DptoInformatica {
    #aulas = new Map();    // clave: número de aula -> valor: { aula, grupo }

    constructor() {}

    get Aulas() { return this.#aulas; }

    addAula(aula, grupo) {
        if (this.#aulas.has(aula.Numero)) return false;
        this.#aulas.set(aula.Numero, { aula, grupo });
        return true;
    }

    getUbicacion(idEquipo) {
        for (const { aula } of this.#aulas.values()) {
            const posicion = aula.getPosicion(idEquipo);
            if (posicion !== null) {
                const [fila, columna] = posicion;
                return `Aula número: ${aula.Numero}, Fila: ${fila}, Columna: ${columna}`;
            }
        }
        return "Equipo desconocido";
    }

    // Cuenta todas las celdas (también las null): "usados o no"
    getNEquipos() {
        return [...this.#aulas.values()]
            .reduce((total, { aula }) => total + aula.Equipos.flat().length, 0);
    }
}
