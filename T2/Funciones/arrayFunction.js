let saludo1 = function(){
    return "Hola";
}
let saludo2 = () => "Hola";
console.log(saludo1())

//funciones anonimas
//funcion flecha quee pasado una letra decir si es vocal o no, con true o false
// let vocales = () => ("a");
// let esVocal = function(vocales){
//     if(vocales === ""){

//     }
// }




// let a = ['a' , 'b', 'c'];
// a.forEach(function(e){
//     console.log(e);
// })

// a.forEach( e. i , arr => console.log(e), arr ); //el for each va pasan do a la funcion que tengo por dentro.


let a = ['a' , 'b', 'c'];
a.forEach(function(e){
    console.log(e);
})

let b= [ 1, 2, 3,];
console.log(b.map(e=>+1));
let result = b.map(e=> + 1+b);
console.log(result);


