////EJEMPLO 1 /////

// let tabla1= []
// tabla1[0] = [1, 2, 3];
// tabla1[1] = [4, 5, 6];
// tabla1[2] = [7, 8, 9];


// for (let i = 0; i < tabla1.length; i++) {
//    console.log("Fila - " + i );
//    if (tabla1[i] != undefined){
//     for (let j = 0; j < tabla1[i].length; j++) {
//     console.log("Columna -  " + j);
//     console.log("Valor - " + tabla1[i][j]);
    
//    }
//    }
   
// }

////EJEMPLO 2 /////

// let tabla2 = [];
// tabla2[0] = "Laura";
// tabla2[1] = 2;

// for (let i = 0; i < tabla2.length; i++) {
//     if(tabla2[i] != undefined){
//     console.log("Fila = " + i);  
//     console.log("Valor = " + tabla2(i));
// }
    
// }

/////EJEMPLO 3/////
// let table3 = ([1, 2, 3], [4, 5, 6])
// table3[5]= [7,8,9]

// for (let i = 0; i < table3.length; i++) {
//    console.log("Fila - " + i)
//    for (let j = 0; j < table3[i].length; j++) {
//     console.log( "Columnas " + j + " Valor " + table3[i][j])
//    }
// }

let tabla4 = [1, 2, 3, ["a", "b"], "c", true, [4, 5]];
tabla4[10] = "d";
for (let i = 0; i < tabla4.length; i++) {
   //console.log("Fila: " + i)
    if(typeof tabla4[i] === "object"){
   for (let j = 0; j < tabla4[i].length; j++) {
    console.log( "Columnas " + j + " Valor " + tabla4[i][j])
   }
} else{
    console.log( " Valor: " + tabla4(i));
}
}
