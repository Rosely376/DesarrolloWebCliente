
var frase = "Esto es un texto para hacer ejercicios con cadenas. Se realizará una transformación sobre el mismo. Se emplearán métodos del objeto String.";
//////Ejercicio_66 Queremos la frase al revés por palabras y por catarecteres

var resultado = "";

for (let i = frase.length - 1; i >= 0; i--) {
    resultado += frase[i];
}

console.log(resultado);


var palabras = [];
var palabra = "";
var posicion = 0;

for (let i = 0; i < frase.length; i++) {

    if (frase[i] != " ") {
        palabra += frase[i];
    } else {
        palabras[posicion] = palabra;
        posicion++;
        palabra = "";
    }
}

palabras[posicion] = palabra;

var resultado = "";

for (let i = palabras.length - 1; i >= 0; i--) {
    resultado += palabras[i] + " ";
}

console.log(resultado);



//////Ejercicio_77 Obtener los dias de la semana de tus siguientes cinco cumpleaños

var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

var dia = 31;
var mes = 9; 

var fecha = new Date();

for (let i = 0; i < 5; i++) {

    var año = fecha.getFullYear() + i;

    var cumpleaños = new Date(año, mes, dia);

    console.log(dias[cumpleaños.getDay()]);
}
//////Ejercicio 69 Ejercicio de expresioines regulares: 
//Apartir de un texto almacenar en 5 arrays diferentes las palabras de una, dos, tres, cuatro, cinco letras o más

var texto = "Clase de desarrollo web cliente";

var palabras1 = texto.match(/\b[a-zA-Z]\b/g);
var palabras2 = texto.match(/\b[a-zA-Z]{2}\b/g);
var palabras3 = texto.match(/\b[a-zA-Z]{3}\b/g);
var palabras4 = texto.match(/\b[a-zA-Z]{4}\b/g);
var palabras5 = texto.match(/\b[a-zA-Z]{5,}\b/g);

console.log("1 letra:", palabras1);
console.log("2 letras:", palabras2);
console.log("3 letras:", palabras3);
console.log("4 letras:", palabras4);
console.log("5 o mas:", palabras5);


//Un texto es el la una composición de signos codificados en un sistema de escritura (como un alfabeto) 
// que forma una unidad de sentido. Su tamaño puede ser variable. 
// También es texto una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, 
// aunque ¡no tienen sentido! para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, 
// a un texto es un entramado; de signos con una intención comunicativa que adquiere sentido en determinado contexto. ¿Es cierto? Es complicado.


////Ejercicio cadenas: Alternar palabras en mayúsculas con palabras en minúsculas

var frase = "Esto es un texto de prueba";

var palabras = frase.split(" ");

for (let i = 0; i < palabras.length; i++) {

    if (i % 2 == 0) {
        palabras[i] = palabras[i].toUpperCase();
    } else {
        palabras[i] = palabras[i].toLowerCase();
    }
}

var resultado = palabras.join(" ");

console.log(resultado);