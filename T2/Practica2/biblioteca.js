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

let checkPages = libro => libro.getnumPag() > 150;

//CheckLibro: Función flecha a la que se le pasa la biblioteca y un libro y devuelve true si la biblioteca contiene ese titulo
// let checkLibro = libro => libro.getnombre()
//tenemos que poner lenght 
//hacemos filter y quitamos lo q devuelve

//hacer checkLibro, funcion que se le pasa la biblioteca y un libro y devuelve true si la bibolioteca contiene ese titulo
let checkLibro =  (libroNombre, biblio) => biblioteca.filter(libro => libro.nombre == LibroNombre).length 
.map(libro.nombre == libroNombre)
console.log(checkLibro("Libro1", biblioteca));

//
