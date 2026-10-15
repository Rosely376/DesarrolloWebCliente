//operador de propagación o spread operator "..."
//operador spread con objetos: 
const persona = {nombre: 'Pepe', edad: 27};
const  cliente = {ventas: 120, ...persona};
console.log(cliente);
// persona.nombre="Laura";
// console.log(persona);
let cliente2 = {...persona }; //asignar dos objetos 
persona.nombre="Rosely";
console.log(cliente2);
// const copiaCliente = { ...cliente };
// console.log(copiaCliente);