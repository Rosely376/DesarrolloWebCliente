//"use strict";
//new Date() crea un objeto con la fecha y hora del sistema
let fecha1 = new Date (new Date())
console.log("La fecha de hoy es: " +  fecha1)

//new Date(milisegundos)
let fecha2 = new Date (new Date(12))
console.log("La fecha de hoy es: " +  fecha2)

//Usa el formato "aaaa-mm-dd"
let fecha3 = new Date (new Date("2026-09-26"))
console.log("Fecha: " +  fecha3)

// 
//no se debe poner un 0 delante de un numero
let fecha4 = new Date(2000,1,21)
console.log("Fecha: " + fecha4)



// now 
let ahora = Date.now();
console.log("Fecha y hora: " + ahora)

let parseado = Date.parse("2026-9-29");
console.log("Fecha con parse " + parseado) 

//let fecha5 = new Date();
let fecha5 = new Date(2026, 9, 29, 14, 30, 20, 12);
console.log("La fecha de referencia es: " + fecha5)


let anio = fecha5.getFullYear(); //getFullYear saca el año de la fecha Date
console.log("El año es: " + anio)

let mes = fecha5.getMonth(); //getMonth()saca el mes de la fecha Date
console.log("El mes es: " + mes)

let dia = fecha5.getDate(); //getDate() saca el dia de la fecha Date
console.log("El dia es: " + dia)

let diaSemana = fecha5.getDay(); //getDay() saca el número del dia de la semana que es
console.log("El número del dia de la semana es: " + diaSemana)

let hora = fecha5.getHours(); //getHours() saca la hora de la fecha Date
console.log("La hora es: " + hora)

let minutos = fecha5.getMinutes(); //getMinutes() saca los minutos de la fecha Date
console.log("Los minutos son: " + minutos)

let segundos = fecha5.getSeconds(); //getSeconds() saca los segundos de la fecha Date
console.log("Los segundos son: " + segundos)

let milisegundos = fecha5.getMilliseconds(); //getMiliseconds 
console.log("Los milisegundos son: " + milisegundos)

 

const a = 1, b=2;
console.log(`Suma: ${a+b}`); 
console.log('Suma: ${a+b}');
console.log("Suma: ${a+b}");

//String de varias lineas: 
const s = `Colocar un fecha 
y pintarla` ;
console.log(s)
//recorer cada fecha con dame el año, dame el dia


// let fecha6 = new Date()
// console.log"(`Fecha actual: Strind de varias lineas, `)

// function foo(texto,p1,p2, p3){
//     console.log(texto,p1,p2,p1)
//     return `La summa es: ${p1+p2}`;

// }
 

// function suma (a,b,c,d){
//     if (a!=null & b!=c)
//     return `a, b, c `  

// }

//número de parametros






































