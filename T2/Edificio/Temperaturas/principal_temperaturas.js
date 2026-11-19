import { Estacion } from "./estacion.js";
import { Meteorologia } from "./meteorologia.js";

const meteo = new Meteorologia();

// ---------- Insertar ----------
console.log(meteo.addEstacion(new Estacion("Oviedo")));      // true
console.log(meteo.addEstacion(new Estacion("Santander")));   // true
console.log(meteo.addEstacion(new Estacion("Gijón")));       // true
console.log(meteo.addEstacion(new Estacion("oviedo")));      // false: ya existe

document.getElementById("inicial").innerHTML = meteo.toHTML();

// ---------- Modificar una temperatura ----------
console.log(meteo.modificarTemperatura("Oviedo", 1, 25));    // true
console.log(meteo.modificarTemperatura("Oviedo", 31, 25));   // false: el día 31 no existe
console.log(meteo.modificarTemperatura("Oviedo", 2, 99));    // false: fuera de -20..40
console.log(meteo.modificarTemperatura("Madrid", 1, 10));    // false: no hay estación

// ---------- Eliminar una ciudad ----------
console.log(meteo.eliminarEstacion("Gijón"));                // true
console.log(meteo.eliminarEstacion("Gijón"));                // false: ya no existe

document.getElementById("final").innerHTML = meteo.toHTML();
