
// Crear cinco objetos para guardar información de libros.

const LIBRO1 = {
    nombre: "Principito",
    color: "blanco",
    autor: "persona",
    numPag: 100,
    editorial: "editorial",
    forrado: true,
    url: "url",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
    }
};

const LIBRO2 = {
    nombre: "Principito",
    color: "blanco",
    autor: "persona",
    numPag: 100,
    editorial: "editorial",
    forrado: true,
    url: "url",
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
    numPag: 100,
    editorial: "editorial",
    forrado: true,
    url: "url",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
    }
};

const LIBRO4 = {
    nombre: "Principito",
    color: "blanco",
    autor: "persona",
    numPag: 100,
    editorial: "editorial",
    forrado: true,
    url: "url",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
    }
};

const LIBRO5 = {
    nombre: "Principito",
    color: "blanco",
    autor: "persona",
    numPag: 100,
    editorial: "editorial",
    forrado: true,
    url: "url",
    comprar: function () {
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    },
    toString: function () {
        return `${this.nombre} ${this.autor} ${this.numPag} ${this.forrado}`;
    }
};

// Mostrar la información del primer libro.
console.log(LIBRO1.toString());

// Crear una biblioteca con los cuatro primeros libros.
const BIBLIOTECA = [LIBRO1, LIBRO2, LIBRO3, LIBRO4];

console.log(BIBLIOTECA.toString());

// Mostrar la editorial de cada libro.
for (let libro of BIBLIOTECA) {
    console.log(libro.editorial);
}

BIBLIOTECA.forEach(libro => libro.comprar());

// LIBRO1.comprar();

// Función flecha que devuelve true si el número de páginas es mayor que 150.
const checkPages = libro => libro.numPag > 150;

console.log(checkPages(LIBRO1));

// CheckLibro: función flecha que recibe la biblioteca y un título.
// Devuelve true si la biblioteca contiene un libro con ese título.

// Otra opción es utilizar filter() y comprobar si el resultado tiene elementos.
// const checkLibro = (biblio, libroNombre) =>
//     biblio.filter(libro => libro.nombre === libroNombre).length > 0;

// Otra opción es utilizar some(), que devuelve true o false.
// const checkLibro = (biblio, libroNombre) =>
//     biblio.some(libro => libro.nombre === libroNombre);

// Uso de find(), que devuelve el libro encontrado o undefined.
const checkLibro = (biblio, libroNombre) =>
    biblio.find(libro => libro.nombre === libroNombre) !== undefined;

console.log(checkLibro(BIBLIOTECA, "Principito"));

// Uso del operador spread para añadir el quinto libro a la biblioteca
// sin modificar el array original.
const nuevaBiblioteca = [...BIBLIOTECA, LIBRO5];

// Usar checkPages con filter() para obtener un nuevo array
// llamado LibrosLargos, que contenga libros con más de 150 páginas.
const LibrosLargos = BIBLIOTECA.filter(checkPages);

console.log(LibrosLargos);

// Función tradicional que devuelve true si el libro tiene más de 150 páginas.
function checkPages2(libro) {
    if (libro.numPag > 150) {
        return true;
    } else {
        return false;
    }
}

// Obtener los libros largos utilizando checkPages2.
const LibrosLargos2 = BIBLIOTECA.filter(checkPages2);

console.log(LibrosLargos2);

// Función que recibe una biblioteca y devuelve un array
// con los libros que tienen más de 150 páginas.
function librosLargos2(BIBLIOTECA) {
    const arrayLibros = BIBLIOTECA.filter(checkPages2);
    return arrayLibros;
}

console.log(librosLargos2(BIBLIOTECA));
