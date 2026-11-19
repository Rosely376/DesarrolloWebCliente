export class Estacion {
    static DIAS = 30;
    static MIN = -20;
    static MAX = 40;

    #ciudad;
    #temperaturas;

    constructor(ciudad) {
        this.#ciudad = ciudad;
        // Array.from con función: 30 valores aleatorios distintos
        this.#temperaturas = Array.from({ length: Estacion.DIAS }, () => Estacion.#aleatoria());
    }

    // Entero aleatorio entre -20 y 40 (ambos incluidos)
    static #aleatoria() {
        return Math.floor(Math.random() * (Estacion.MAX - Estacion.MIN + 1)) + Estacion.MIN;
    }

    get Ciudad() { return this.#ciudad; }
    get Temperaturas() { return [...this.#temperaturas]; }   // copia: no se expone el array privado

    // dia va de 1 a 30 (como se ve en la tabla). Devuelve true si se ha podido modificar
    modificarTemperatura(dia, valor) {
        const diaValido = Number.isInteger(dia) && dia >= 1 && dia <= Estacion.DIAS;
        const valorValido = typeof valor === "number" && valor >= Estacion.MIN && valor <= Estacion.MAX;
        if (!diaValido || !valorValido) return false;
        this.#temperaturas[dia - 1] = valor;
        return true;
    }

    getMedia() {
        const suma = this.#temperaturas.reduce((ac, t) => ac + t, 0);
        return Math.round(suma / Estacion.DIAS);
    }

    // Devuelve la fila <tr> de la tabla
    toHTML() {
        const celdas = this.#temperaturas.map(t => `<td>${t}</td>`).join("");
        return `<tr><th>${this.#ciudad.toUpperCase()}</th>${celdas}<td class="media">${this.getMedia()}</td></tr>`;
    }
}
