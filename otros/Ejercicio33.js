var tablaA = [[1,2,3], [4,5,6], [7,8,9,10], ['A', 'B', 'C']];
// console.log(tablaA.length);
// console.log(tablaA[0].length);
// console.log(tablaA[1],[1]);

console.log("Recoreer la tabla con el método forEach")
tablaA.forEach(function (elementoExterno,indiceExterno){ 
    tablaA[indiceExterno].forEach(function (elementoInterno,j){
        console.log(tablaA[indiceExterno][j]);
    });
});
 

//Bidimensional a partir de los unidimensionales
var tablaC= Array.of([1,2,3],[3,4,5]);
console.log(tablaC);



//ver tablaD = new Array(new Array(3), new Array(3)),
var tablaD = Array.of([1,2,3], [4,5,6]);
console.log(tablaD);


for(let i=0; i<tablaC.length; i++){
    for(let j=0; j<tablaC.length; j++){
        console.log (tablaC[i,j]+ ",");
        

    }
    console.log("\n")

}





