export class Aula {
    #numero;
    #equipos;
    #puestos;

    constructor(numero, filas, columnas) {
        this.#numero = numero;                 // se deja tal cual: la clave del Map es el string "213"
        this.#puestos = filas * columnas;
        // Array.from crea una fila NUEVA por cada posición (con fill sería la misma fila repetida)
        this.#equipos = Array.from({ length: filas }, () => Array(columnas).fill(null));
    }

    // ---------- getters y setters ----------
    get Numero() { return this.#numero; }
    get Equipos() { return this.#equipos; }
    get Puestos() { return this.#puestos; }

    set Numero(valor) { this.#numero = valor; }
    set Equipos(valor) { this.#equipos = valor; }
    set Puestos(valor) { this.#puestos = valor; }

    // ---------- métodos ----------
    activaEquipo(equipo, fila, columna) {
        // Las filas nunca se pueden sobrepasar
        if (!Number.isInteger(fila) || fila < 0 || fila >= this.#equipos.length) return false;
        if (!Number.isInteger(columna) || columna < 0) return false;

        if (equipo.Personal) {
            // Portátil: puede sobrepasar columnas -> se inserta y desplaza al resto
            this.#equipos[fila].splice(columna, 0, equipo);
            return true;
        }

        // Sobremesa: la columna debe existir
        if (columna >= this.#equipos[fila].length) return false;
        this.#equipos[fila][columna] = equipo;
        return true;
    }

    getPosicion(idEquipo) {
        for (let i = 0; i < this.#equipos.length; i++) {
            for (let j = 0; j < this.#equipos[i].length; j++) {
                const e = this.#equipos[i][j];
                if (e !== null && e.Id === idEquipo) {
                    return [i, j];
                }
            }
        }
        return null;
    }

    getPorcentajeOcupacion() {
        const activos = this.#equipos.flat().filter(e => e !== null).length;
        return Math.round(activos * 100 / this.#puestos);
    }
}
