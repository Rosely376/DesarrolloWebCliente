// ? representa 0 o 1 elementos
// console.log(/^a\d?/.test('abc')); //cadena que empiece por a y opcionalmente un número
// console.log(/^a\d?/.test('ab3'));
// console.log(/^a\d/.test('abc'));
// console.log(/^a\d/.test('ab3'));
// console.log(/\d{3}/.test('h34a')); //busca que al menos haya 3 números seguidos 
// console.log(/\d{3}/.test('h34ba'));
// console.log(/[a-c]{3,}/.test('--cab--')); //tres caracteres que sean a,b,c

////Otras opcioens 

console.log(/^1\d/.test('1fw'));
console.log(/^2\d?/.test('ASW'));
console.log(/a+b/.test('ab')); // Busca una o más 'a' seguidas de una 'b'. Aquí hay exactamente una 'a'.
console.log(/a+b/.test('b')); // Falla porque no hay ninguna 'a' antes de la 'b'. Requiere al menos una
console.log(/a*b/.test('b')); // Se cumple porque hay una secuencia de varias 'a' seguidas de una 'b'.
console.log(/^a\d*/.test('a')) // Empieza por 'a' seguido de cero o más números. Al no haber números, sigue siendo verdadero.
console.log(/a{3}/.test('baaac'));    // Busca exactamente 3 letras 'a' seguidas
console.log(/x{2,}/.test('yxxc')); //busca minimo 2 letras x
console.log(/x{2,}/.test('yxxc'));

console.log(/[a-c]{3,}/.test('--ca5b3-'));
console.log(/[a-c]{3,7}/.test('aaaaaaa'));
//queremos que siempre empieze por  b y que termine por c
//queremos que en el medio haya 0, b 1 o mas apariciones 
console.log(/^b.?c$/.test(bbbaccc));

console.log(/^Sb.?ct$/.test('bbccc77'));

console.log(/^Sba?c*7$/.test('Sbaaaaaaaaaacc'));

//Comprobar que una expresión comienze por un conjunto de letraas abc que empieze por entre 3-9 letras abc y termine entre 3-9 letrahs abc
//quet ermine entre 3 o 4 caracteres etre abc
// ejemplos abc -> true
// ejemplos abclabc -> true
// ejemplos abcabclabc -> true
// ejemplo abcabcabcabc -> true
//podemos usar el .match 
//tenemos que investigar si se puede con un Y 
console.log(/^abc ?abc$/.test('abcqabcabc')); 
console.log() 

