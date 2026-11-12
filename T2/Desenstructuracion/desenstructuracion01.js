// const array = [ 'Jose', 'Perez', 'Garcia', 'C/Mayor,1'];

// const nombre = array[0];
// const apellido1 = array[1];
// console.log(nombre);
// console.log(apellido1);


// const [nombre,,,calle] = array; //no es necesario poner apellido1, apellido2
// console.log(nombre);
// // console.log(apellido1);
// console.log(calle);

//Utilizar parametros "rest" para recoger el resto de los datos en otro array;
// const array= ['José', 'Pérez', 983344343, 9834343];
// const [nombre,, ...telefonos] = array;
// console.log(nombre);
// console.log(telefonos);


//se pueden utilizar valores por defecto, en este caso Rodriguez
// const array = ['Jose'];
// const [nombre, apellido = 'Rodriguez'] = array;
// console.log(nombre);
// console.log(apellido);

// //desestructurando objetos
// let a = 3;
// let b= 6;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// const persona ={
//     nombre: 'Sara',
//     pais: 'Nigeria',
//     trabajo: 'Desarrolador'
// };
// const{nombre, pais, trabajo}= persona;
// //Por posicion o nombre, nombre
// console.log(nombre);
// console.log(pais);
// console.log(trabajo);


// const persona ={
//     nombre: 'Sara',
//     pais: 'Nigeria'
// };
// const{nombre: firstName, pais: country = 'España'}= persona;
// //Por posicion o nombre, nombre
// console.log(firstName);
// console.log(country); 



