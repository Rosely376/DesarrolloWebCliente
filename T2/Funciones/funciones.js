
// function hello(nombre){
//     return 'Hola {$nombre}';
// }

 
let hello = function (nombre) {
    return `hola ${nombre}`;

}
console.log(hello('Pepe'));


function hola (foo){
    foo("Laura");
}

function hola2 (foo, parametro){
    console.log("Hola");
    foo();
    console.log(parametro); 
}

//funcion anónima como parametro
hola(function (){
    console.log('hola');
})

function adios (nombre){
    console.log(`Adiós ${nombre}`);

}

function adios2 (){
    console.log("adios");

}

hola(adios);
//hola2(adios("laura"));

let noNombrada = function(){
    console.log ("Esto es un función")
}
////Funciones anidadadas////

function f1(nombre,edad){
    console.log(`$(nombre) - $(edad)`);
}
f1('Pepe');
f1('Pepe', 30, 'Otro dato');

//Parámetros utilizados "arguments"
function f2(nombre, edad){
    console.log('$(arguments[0]) - $(arguments[1])');
}
f2('Pepe');
f2('Pepe', 30, 'Otro dato');

function f3(nombre= 'Paco'. edad=20){
    console.log('$(nombre - $(edad)');
}

//Ejemplos
function suma(a,b,c,d,e) {
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
         resultado += arguments[i];
        
    }
    console.log(resultado);
}

suma(1,45,23,2,2,2);


function suma1(a,b){
    return a+b;
}

console.log(suma1(10));
console.log(suma(10, 20 , 30));


function suma2 (...args){
    for (const a of args){
        console.log (args[0]);
        result += a;
    }
}


function aniadirApellidos(nombre, ...apellidos){
    let result= nombre;
    for(const i in apellidos){
        result += " "+apellidos[i];
    }
    return result;
 

}

console.log(aniadirApellidos("Pedro"));
console.log(aniadirApellidos("Luiz", "Ruiz"));
console.log(aniadirApellidos("Ana", "Gill", "Sanz"));



//Operador de prograpagación o spread

let values = [1, 2, 3];
console.log(values);
let copy = [...values];
console.log(copy)
let morevalues = [4, 5];
values.push(...morevalues);  
console.log(values);
let other = [0, ...morevalues];
console.log(other);

//Si tenemos una array y con el operador de asignación 
let values2 = [5,6,7];
let copy2= values2;
console.log("Values: " + values2);
console.log("Copia: " + copy2);




