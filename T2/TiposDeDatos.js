let numero1 = 1;
console.log(typeof numero1); //número
let numero2 = 1.03;
console.log(typeof numero2); //decimal
let boleano = true;
console.log(typeof boleano); //booleano
let cadena = "HOLA";
console.log(typeof cadena); //cadena
let nulo = null;
console.log(typeof nulo); //null
let indefinido;
console.log(typeof indefinido); //indefinido
let a = 123;
console.log (typeof a + " despues de asignarle un número");
a = "Hola";
console.log(a);
console.log (typeof a + " despues de asignarle un String");
//let objeto=(a:1);
console.log(typeof objeto);


console.log(a.constructor.name);
console.log(String.constructor.name); //number
console.log(boleano.constructor.name); //boolean 
console.log (a);

let x= 2
let y = 5
let resultadox= ++x
let resuladoz= y++
//Se puede hacer ++y o y++ en ambos casos se incrementa uno pero en uno antes y en otro despues 
console.log (resultadox)
console.log (resuladoz )

let e= eval("2+4+parseInt('1.2')");
console.log(e);

let t= true //1
let f= false //0
console.log(t+f)
console.log(t-f)
 
console.log("??", true == 1);
console.log("" == 0); //devuelve true por que 
console.log("3" === 3) //devuelve false


//Arrays

let lista1= new Array();
let lista2= Array();
let lista3= [];
console.log("Arrays ")


// lista1[0] = 1;
// //console.log(lista1[0]);
// lista1[10] = "Pepe";
// console.log("tamaño lista " + lista1.length);

// for (let i = 0; i < lista1.length; i++) {
//     console.log("i=" + i);
//    console.log(lista1[i]);
    
// }

lista1["nombre"] = "Laura"
 lista1.pos2 = "santi";
lista1["pos3"] = 3;
console.log("tamaño lista " + lista1.length)
for (let i = 0; i < lista1.length; i++) {
    console.log("i=" + i);
    console.log(lista1[i]);
    console.log(lista["nombre"]);
  }

//Matrices




