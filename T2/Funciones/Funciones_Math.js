  
console.log("Math.PI =", Math.PI);  
 
console.log("Math.E =", Math.E);  
// 3. Math.abs()
console.log("Valor absoluto de un número ");
console.log("Math.abs(-7)   =", Math.abs(-7));
console.log("Math.abs(7)    =", Math.abs(7));
console.log("Math.abss(-3.5) =", Math.abs(-3.5)); 
// Hace operaciones de seno, coseno, tangente 
console.log("Math.sin(0)         =", Math.sin(0));
console.log("Math.cos(0)         =", Math.cos(0));           
console.log("Math.tan(Math.PI/4) =", Math.tan(Math.PI / 4)); 
// Para colocar exponenciación y logaritmos 
console.log("Math.exp(1)      =", Math.exp(1));       
console.log("Math.log(Math.E) =", Math.log(Math.E)); 
console.log("Math.log(10)     =", Math.log(10));     
// Redondea hacia arriba 
console.log("Math.ceil(4.1)  =", Math.ceil(4.1)); 
console.log("Math.ceil(4.9)  =", Math.ceil(4.9)); 
console.log("Math.ceil(-4.1) =", Math.ceil(-4.1));
// Redondea hacia abajo
console.log("Math.floor(4.1)  =", Math.floor(4.1));
console.log("Math.floor(4.9)  =", Math.floor(4.9));
console.log("Math.floor(-4.1) =", Math.floor(-4.1));
// Redondea al más cercano 
console.log("Math.round(4.4)  =", Math.round(4.4));  
console.log("Math.round(4.6)  =", Math.round(4.6));  
console.log("Math.round(-4.5) =", Math.round(-4.5)); 

console.log("Math.pow(2, 3)   =", Math.pow(2, 3));   
console.log("Math.pow(9, 0.5) =", Math.pow(9, 0.5)); 
console.log("Math.pow(2, -1)  =", Math.pow(2, -1));  

// Devuelve el menor de los argumentos
console.log("Math.min(3, 7, -2, 10) =", Math.min(3, 7, -2, 10));
let numeros = [8, 3, 15, 1, 9];
console.log("Math.min(...numeros)   =", Math.min(...numeros));  

// Devuelve el mayor de los argumentos
console.log("Math.max(3, 7, -2, 10) =", Math.max(3, 7, -2, 10));
console.log("Math.max(...numeros)   =", Math.max(...numeros));  

// Hace las raiz cuadrada del argumento
console.log("Math.sqrt(16) =", Math.sqrt(16)); 
console.log("Math.sqrt(2)  =", Math.sqrt(2)); 
console.log("Math.sqrt(-1) =", Math.sqrt(-1)); 

// Genera numeros de manera aleatoria
console.log("\n--- Math.random() ---");
console.log("Math.random() =", Math.random());
console.log("Math.random() =", Math.random());
console.log("Entero entre 1 y 10 =", Math.floor(Math.random() * 10) + 1);
