import { Equipo } from "./equipo.js";
import { Aula } from "./aula.js";
import { DptoInformatica } from "./dptoInformatica.js";

const FILAS=5;
const COLUMNAS=4;

var dptoNaranco=new DptoInformatica();
const asignaciones=[{aula:"213", grupo:"SMR2A"},
                    {aula:"214", grupo:"IOF2"}, 
                    {aula:"215", grupo:"DAW2A"}, 
                    {aula:"216", grupo:"SMR1A"}, 
                    {aula:"217", grupo:"DAM1A"}, 
                    {aula:"218", grupo:"DAM2A"}, 
                    {aula:"220", grupo:"IOF1"}
];
asignaciones.forEach ((asignacion)=>{
    console.log(dptoNaranco.addAula(new Aula(asignacion.aula,FILAS,COLUMNAS), asignacion.grupo)?"Se ha insertado el aula "+asignacion.aula:"No se ha podido insertar el aula "+asignacion.aula);
});

console.log("\n%cRECUENTO TOTAL EQUIPOS dptoNaranco: "+dptoNaranco.getNEquipos()+" equipos--------------------\n", 'background: #FADBD8');

console.log ("%cACTIVANDO EQUIPOS DE SOBREMESA QUE SE VAN A USAR...", 'background: #222; color: #bada55');
asignaciones.forEach ((asignacion)=>{
    let aula=dptoNaranco.Aulas.get(asignacion.aula).aula;
    for (let i=0;i<FILAS;i++)
        for (let j=0; j<COLUMNAS;j++)
            aula.activaEquipo(new Equipo("Descripción equipo "+aula.Numero+"-"+i+"-"+j, false), i, j);
    });

asignaciones.forEach ((asignacion)=>{
        console.table(dptoNaranco.Aulas.get(asignacion.aula).aula.Equipos);
        console.log("Porcentaje de ocupación tras asignaciones aula "+asignacion.aula+":"+dptoNaranco.Aulas.get(asignacion.aula).aula.getPorcentajeOcupacion()+"%");
        });

function datosPortatiles(){
    console.log ("%cACTIVANDO PORTÁTILES QUE SE VAN A USAR...", 'background: #222; color: #bada55');

    // Se repite hasta que el usuario escriba "S" (mayúscula o minúscula) o cancele
    while (true) {
        const numAula = prompt("Aula destino (ej. 220). Escribe S para terminar:");
        if (numAula === null || numAula.trim().toUpperCase() === "S") break;

        const descripcion = prompt("Descripción (ej. Portátil FP Básica 2-1):");
        const fila = Number(prompt("Fila (ej. 2):"));
        const columna = Number(prompt("Columna (ej. 1):"));
        const textoDias = prompt("Nº días (ej. 30). Vacío = hasta fin de curso:");
        const dias = (textoDias === null || textoDias.trim() === "") ? undefined : Number(textoDias);

        const registro = dptoNaranco.Aulas.get(numAula.trim());
        if (registro === undefined) {
            console.log("El aula " + numAula + " no existe");
            continue;
        }

        const portatil = new Equipo(descripcion, true, dias);
        if (registro.aula.activaEquipo(portatil, fila, columna)) {
            console.log(`Equipo portátil ${portatil} añadido correctamente en Aula número: ${numAula} *** Fila: ${fila}- Columna: ${columna}`);
            console.table(registro.aula.Equipos);
            console.log("Porcentaje de ocupación aula "+numAula+":"+registro.aula.getPorcentajeOcupacion()+"%");
        } else {
            console.log("No se ha podido añadir el portátil (fila o columna no válida)");
        }
    }
}

datosPortatiles();

console.log("%cEl número total de equipos en el departamento es: "+dptoNaranco.getNEquipos()+" equipos--------------------", 'background: #FADBD8');
