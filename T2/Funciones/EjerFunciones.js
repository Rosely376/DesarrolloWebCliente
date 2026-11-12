
console.log("Ejercicio1");
let a = [1,2,3,4];
let f1= a=> a.filter(valor => valor % 4 == 0).map(valor => valor *= 3);
console.log("\nFuncion 1: ");
console.log(f1(a));


console.log("Ejercicio 2");
let f2 = a=> { a
    .filter(e=> e % 2!=0)
    .forEach( e => console.log(e))
}
f2(a);

console.log("Ejercicio 2");
const f3 = a => {
    // return a 
    //     .filer((x, i => i%2 == 0)
    //     .reduce(ac, n) => ac +n));
}