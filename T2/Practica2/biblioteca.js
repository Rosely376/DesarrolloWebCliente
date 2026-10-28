//Crear cuatro bjetos para guardar información de libros 

const LIBRO1 = {
    nombre: "Principito", 
    color: "blanco", 
    autor: "persona", 
    numPag: "100", 
    editorial: "editorial", 
    forrado: true, 
    url:"url", 
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
        
    },
      toString: function(){
         return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
     }
};

const LIBRO2 = {
    nombre: "Principito", 
    color: "blanco", 
    autor: "persona", 
    numPag: "100", 
    editorial: "editorial", 
    forrado: true, 
    url:"url", 
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
    }
};

const LIBRO3 = {
    nombre: "Principito", 
    color: "blanco", 
    autor: "persona", 
    numPag: "100", 
    editorial: "editorial", 
    forrado: true, 
    url:"url", 
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
        
    },
      toString: function(){
         return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
     }
};

const LIBRO4 = {
    nombre: "Principito", 
    color: "blanco", 
    autor: "persona", 
    numPag: "100", 
    editorial: "editorial", 
    forrado: true, 
    url:"url", 
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
        
    },
      toString: function(){
         return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
     }


     
};  

const LIBRO5 = {
    nombre: "Principito", 
    color: "blanco", 
    autor: "persona", 
    numPag: "100", 
    editorial: "editorial", 
    forrado: true, 
    url:"url", 
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
        
    },
      toString: function(){
         return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
     }


     
};  

console.log(LIBRO1.toString());
 
const biblioteca = [LIBRO1, LIBRO2, LIBRO3, LIBRO4];
 
console.log(biblioteca.toString());
 
for (let libro of biblioteca) {
    console.log(libro.editorial);
}
biblioteca.forEach(libro => libro.comprar());
 
//LIBRO1.comprar();

//funcion flecha true si el número de páginas es mayor a 150
// let checkPages = libro => {
//     return libro.getnumPag() > 150;
// }

let checkPages = libro => libro.numPag > 150;
console.log(checkPages(LIBRO1));

//CheckLibro: Función flecha a la que se le pasa la biblioteca y un libro y devuelve true si la biblioteca contiene ese titulo
// let checkLibro = libro => libro.getnombre()
// const checkLibro = (biblio, libroNombre) =>
//     biblio.some(libro => libro.nombre === libroNombre);

// console.log(checkLibro(biblioteca, "Principito"));
///
//tenemos que poner lenght 
//hacemos filter y quitamos lo q devuelve

//hacer checkLibro, funcion que se le pasa la biblioteca y un libro y devuelve true si la bibolioteca contiene ese titulo
// let checkLibro =  (libroNombre, biblio) => biblioteca.filter(libro => libro.nombre == LibroNombre).length .map(libro.nombre == libroNombre)
// console.log(checkLibro("Libro1", biblioteca));

//otra opcion
// let checkLibro =  (libroNombre, biblio) => biblioteca.some(libro => libro.nombre == LibroNombre);
// console.log(checkLibro("Libro1", biblioteca));

//Uso del Find, devuelve true o false
// let checkLibro = (biblio, libroNombre) => biblio.find(libro => libro.nombre == libroNombre)? "true" : "false";
// console.log(checkLibro, LIBRO1(biblioteca, "Libo No existente"));
const checkLibro = (biblio, libroNombre) => biblio.find(libro => libro.nombre === libroNombre) !== undefined;


//Uso del spread operator para añadir a la biblioteca el libro que teniamos sin agregar junto a los tres que tenia
// biblio[...biblio, libro];
 const nuevaBiblioteca = [...biblioteca, LIBRO5];

//Usar la función checkPaginas en el método filter, para obtener un nuevo array LibrosLargos que contenga libros con páginas > 150
 const LibrosLargos = biblioteca.filter(checkPages);

 console.log(LibrosLargos);

 function checkPages2(libro){
    if(libro.numPag > 150){
        return true;

    }else{
        return false;
    }
 }
 var checkPages2 = (libro) => libro.numPag > 150; 

//  function librosLargos2(bibolioteca){
//     let arrayLibros;
//     for (let i = 0; i < biblioteca.length; i++) {
//         if(checkPages2(biblioteca)){}
        
//     }
//  }

//let librosLargos2 = biblioteca.filter(libro => checkPages(libro))
//Añadimos la función checkAutor. Recibe un autor y la biblioteca usa el método find para devolver un libro de dicho autor

// let checkAutor = (autor, biblioteca) => biblioteca.find(libro => libro.autor ==autor) || "no encontrado";
// console.long(checkAutor("Ana", biblioteca));


//Función flecha que recibiendo la biblioteca, pone  a true el campo forrado de todos los libros que contiene
let forrarLibro =  biblioteca.map(libro =>libro.forrado = true); //en este caso es un array
// let forarLibro = (biblioteca) => biblioteca.map(lib => lib.setForrado(true)); //en este caso es una funcion 
console.log(forrarLibro) 


//Recibe la bibloteca y el titulo del libro, y lo borra del array en caso de encontrarlo. Recuerda el método findIndex

let prestarLibro = (biblioteca, titulo) => {
    let indice = biblioteca.findIndex((libro)=> libro.nombre === titulo);
    
}

//Recibe la biblioteca y el libro y mete el libro en el array de biblioteca.
//let devolverLibro 

//Hacer el ejercicio con funciones flecha desde cero