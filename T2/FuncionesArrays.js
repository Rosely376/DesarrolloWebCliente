 

// //lenght nos permite conocer la longitud del array
// const muebles = ["silla", "mesa", "sofa"]
// console.log("Longitud array muebles= " + muebles.length)

// //concat nos permite concatenar dos arrays
// const numeros= [1, 2, 3]
// const numeros2= [4, 5]
// const juntarNumeros = numeros.concat(numeros2)
// console.log("Juntamos los números =  " + juntarNumeros)

// //join permite que una matriz se convierta en cadena
// const matriz= [1, 2, 3 ]
// console.log(matriz.join())
// console.log (matriz)


//pop devuelve y elimina el ultimo elemento del array
// const muebles = ["silla", "mesa", "sofa"]
// const ultimoMueble = muebles.pop();
// console.log(muebles);
// console.log("El ultimo mueble es: " + ultimoMueble);

// //push nos permite añadir un elemento al final del array tambien devuelve la longitud
// const colores = ["rojo", "verde"];
// colores.push("naranja");
// console.log(colores);


//shift elimina el primer elemento del array y luego lo devuelve
//const colores2 = ["amarillo", "morado", "gris"];
// const primerColor = colores2.shift();

// console.log(colores2);  
// console.log(primerColor); 


//unshift añade un elemento al principio del array
// const colores2 = ["amarillo", "morado", "gris"];
// colores2.unshift("rojo");
// console.log("Elemento añadido= " + colores2);




//reverse invierte los elementos del array
// const colores3 = ["amarillo", "morado", "gris"];
// console.log(colores3)
// colores3.reverse()
// console.log(colores3)


//indexOf busca en el array un elemento y devuelve su posición
//sino encuentra el elemento devuelve -1
// const colores5 = ["azul", "rojo", "verde", "rojo"];
// const primeraPosicion = colores5.indexOf("rojo");

// console.log("Posición del elemento= " + primeraPosicion);  
// console.log(colores5.indexOf("amarillo"));  



//lastIndexOf hace lo mismo que indexOf pero de atrás hacia deltante
// const colores6 = ["azul", "rojo", "verde", "rojo"];
// const ultimaPosicion = colores6.lastIndexOf("rojo");

// console.log("Posición del elemento rojo = " + ultimaPosicion);  


//slice 
// const animales = ["perro", "gato", "loro", "pez", "conejo"]; 
// const mascotas = animales.slice(1, 3);

// console.log("Animales extraidos= " + mascotas);  //nos devuelve los elementos del 1 al 4
// console.log(animales); // El array original sigue igual



//splice nos permite modificar un array eliminando o agregando elementos
// const frutas = ["manzana", "pera", "plátano", "naranja"];
// frutas.splice(2, 1, "frambuesa", "uva");

// console.log("Nuevo array= " + frutas);  




//sort ordena los elementos del array convirtiendo cada elemento en caracteres Unicode
// const colores4 = ["verde", "amarillo", "naranja"]
// colores4.sort()
// console.log(colores4)

console.log([6, -2, 2, -7].sort(function (a, b){ 
    return a-b;
}));


//ordenar como manzana, platano, melocoton

// const frutas = ["manzana", "melocoton", "platano"]
// frutas.sort()
// console.log(frutas)



//Hacemos un for con indice en array 
//Hacemo for con iterator
 let frutas = ["manzana", "platano", "melocoton"];
// for (const key in frutas) {
//     if (!Object.hasOwn(object, key)) continue;
    
//     const element = object[key];
    
//     array.forEach(frutas => {
    
//     });
// } 

//////for in // for of // usar tambien eval //for each 
let personas = [{   
    nombre: "Pedro",
    edad: 12,
    ciudad: "Madrid"
}]

for (let atributo in personas) {
    console.log(atributo + " " + personas.atributo);
    
}

for (let fruta of frutas) {
    console.log("Valor " + frutas)
}


//chartAt(pos) , substr(i.f), split(c)

let colores7 = "Colores"
let texto = colores7.charAt(5)
console.log("Caracter extraido = " + texto);

let sbtr = colores7.substring(0, 5);
console.log(sbtr)

let animales = "perro, gato, loro"
let lista= animales.split(",")
console.log(animales)
console.log(lista)





