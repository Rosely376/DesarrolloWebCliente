let numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});

let dobles = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobles);

let suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);

let letras = ["A", "B", "C"];

let resultado = letras.reduceRight(function(acumulador, letra) {
    return acumulador + letra;
}, "");
console.log(resultado);

let mayores = numeros.filter(function(numero) {
    return numero > 3;
});
console.log(mayores);

let todosPositivos = numeros.every(function(numero) {
    return numero > 0;
});
console.log(todosPositivos);

let hayMayoresDeCuatro = numeros.some(function(numero) {
    return numero > 4;
});
console.log(hayMayoresDeCuatro);

let encontrado = numeros.find(function(numero) {
    return numero > 3;
});
console.log(encontrado);

let posicion = numeros.findIndex(function(numero) {
    return numero > 3;
});
console.log(posicion);