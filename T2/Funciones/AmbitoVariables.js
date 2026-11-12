let a1 = 1; // Ambito global
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

{          //Ambito de bloque
    let a2 = 2;
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)

}
//ambito de bloque solo se puede acceder a ella dentro del bloque
//con var se puede cambiar des afuera 

function f() {
    let a3 = 3;
    console.log(a1)
    console.log(a2)
    console.log(a3)

}


{          //Ambito de bloque
    let a = 2;
    console.log(2)

}

function f() { //Ambito de función
    let a = 3;
    console.log(3)
    if (true) //Ambito de bloque 
    {
        let a = 4;
        console.log(4)
    }
}

(function (n) {
    var saludo = "Hola "
    console.log(saludo + n);
}("Juan"));




