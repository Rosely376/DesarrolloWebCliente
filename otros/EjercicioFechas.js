//Queremos calcular el tiempo transcurrido entre dos fechas

var fecha1 = new Date (new Date("2026-10-02"));
var fecha2 = new Date (new Date ("2026-09-02"));
var resultado= fecha2 - fecha1;

var fecha3 = fecha1.getDate()

// console.log(fecha1.getDate()); 
// // 08-10-2026    08-09-2026 
// console.log ("La diferencia de dias es de: " + resultado );

//convertir las fechas a milisegundos y luego restar y convertir 
var resultado1 = fecha1.getMilliseconds();
var resultado2 = fecha2.getMilliseconds();


console.log(resultado1)
console.log(resultado2)







//Ejercicio de expresiones regulares: a PARTIR DE UNA CADENA csv ALMACENAR EN UN ARRAY DE FROMA ORDENADA
//var
//cadenaCSV (que lo primero sea el dni, el siguiente un teléfono, el ciegiente un codigo postal y por ultimo una matricula.) Hacer que cada cosa cumpla con unas reglas de formato