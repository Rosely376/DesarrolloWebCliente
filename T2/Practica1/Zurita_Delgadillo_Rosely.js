
const original = "en un lugar de la mancha";
//f4
//devuelve un string similar al original pero sin espacion y en CamelCase

// let frase = original.split(' ').filter(x=> x % 2 == 0 && x.toUpperCase);
// console.log(frase);
 
/////Corrección:

const f4 = (frase)=> frase.split(" ")
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .reduce((frasefinal, palabra) => frasefinal + palabra);
console.log(f4(original));



//f5
//devuelve la longitud media de las palabras  de la frase
//console.log (original.reduce(e=>))

////correccion:


function f5(original) {
    return original.split(" ")
        .reduce((ac, n) => {
            //console.log(ac);        // 0, 2, 4, 9, 11, 13, 15
            //console.log(n.length);  // 2, 2, 5, 2, 2, 6

            return ac + n.length;
        }, 0) / original.split(" ").length;
}

console.log(f5(original));




//f6
//Devuelve un array con la longitud de cada  una de las palabras q contengan la letra a
// let longitudPalabras = original.split(' ').map(x => x.lenght).filter(x => x[0] === 'a');
// console.log(longitudPalabras);

///correccion
    const f6 = function(original) {
    return original
        .split(" ")
        .filter(e => e.includes("a"))
        .map(e => e.length);
};

console.log(f6(original));