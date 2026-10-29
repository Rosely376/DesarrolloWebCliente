////Objetos

// const propiedad1 = 'edad';
// const valor = 20;
// const propiedad2 = 'trabajador';
// const persona = {nombre: 'Pepe', [propiedad1]: valor, [propiedad2]: true};
 
// const propiedades = ['nombre', 'edad', 'trabajador'];
// const valores = ['Luis', '43', true];
// const persona = {};
// for (const key in propiedades){
//     persona[propiedades[key]] = valores[key];
// }
// console.log (persona);

// const cliente = { nombre: "Pepe", saldo: 100, credito: true };
// for (const key in cliente)
//     console.log(`Propiedad: ${key} Valor: ${cliente[key]}`);
// console.log("nombre" in cliente);
// console.log("apellido" in cliente);
// const copia1 = {};
// //const copia1 = { ...cliente };
// console.log(copia1);
// Object.assign(copia1, cliente);
// console.log("---------Antes de añadir edad: --------")
// console.log(copia1);
// console.log(cliente);
// copia1.edad=20;
// console.log("---------Despúes de añadir edad: --------")
// console.log(copia1);
// console.log(cliente);




// const copia2 = { apellido: "Garcia", ...cliente };
// console.log("---------Antes de hacer cambios: --------")
// console.log(copia2);
// console.log(cliente);
// copia1.edad=20;
// console.log("---------Despúes de hacer cambios: --------")
// console.log(copia2);
// console.log(cliente);



// let copia3 = Object.assign(cliente);
// console.log(copia3);
// let copia4 = {};
// Object.assign(copia4.cliente);
// console.log(copia4);


//////////////Objetos. Prototipos
// const person = {name: 'Paco', age:30};
// const student = {course: 'A'};
// //El prototipo de los dos objetos es el mismo
// console.log(Object.getPrototypeOf(person) === Object.getPrototypeOf(student));
// //
// console.log(student.name); // undefined
// //Asigna a student el prtotipo "Persona
//  Object.setPrototypeOf(student, person);
//  //Ahora student tiene la propiedad name 
//  console.log(student.name);
// //creamos una nueva propiedad "name" en "student"
//  student.name = 'Pepe';
//  console.log(student.name);
//  console.log(person.name);




 ///////Objetos Más formas de crear objetos
 //Object.create() es especialmente útl cuando se desean crear objetos delegados 
//  const person = {name: 'Pepe', age:30};
//  const student = Object.create(person);
//  student.course = 'A';
//  const customer = Object.create(person);
//  customer.sales = 1230;
 
//  console.log(person);
//  console.log(student);
//  console.log(customer);

 //Object.assign() Permite crear objetos y añadir propiedades de otros objetos
//  const data = {height: 160};
//  const student = Object.assign({}, person, data);
//  console.log(person);
//  console.log(student);
// //
// student.nota= 20;
// console.log(student);
// console.log(person);
// console.log(data);

//Objetos y métodos
//

const persona = { 
    visualizar: function () {
        console.log(this);
    }
};

const estudiante = Object.create(persona);
estudiante.nombre = 'Pedro';
estudiante.edad= 20;
estudiante.visualizar(); 
//

function Persona (nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}