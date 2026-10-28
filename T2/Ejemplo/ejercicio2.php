<?php
// =====================================================
//  FUNCIONES DE VALIDACIÓN
//  Todas las funciones "validar..." devuelven:
//     ""                 -> el dato es correcto
//     un mensaje (texto) -> el dato tiene un error
// =====================================================

// Quita espacios sobrantes y protege de código HTML malicioso
function limpiar($dato) {
    return htmlspecialchars(trim($dato));
}

// Devuelve el valor solo si NO tiene error.
// Sirve para mantener en el formulario lo que está bien.
function mantener($valor, $error) {
    if ($error == "") {
        return $valor;
    }
    return "";
}

// Mira el array de errores: true si algún campo tiene error
function hayErrores($errores) {
    foreach ($errores as $error) {
        if ($error != "") {
            return true;
        }
    }
    return false;
}

// ---------- FUNCION GENERAL: VACIO + EXPRESION REGULAR ----------
// $obligatorio: true si el campo no puede estar vacío
function validarConRegex($texto, $obligatorio, $patron, $mensaje) {
    if ($texto == "") {
        if ($obligatorio) {
            return "<-- Este campo está vacío!!";
        }
        return "";   // opcional y vacío: es correcto
    }
    if (!preg_match($patron, $texto)) {
        return $mensaje;
    }
    return "";
}

// Email: 1 o más caracteres, @, 1 o más caracteres, punto y 2 o más caracteres
function validarEmail($email, $obligatorio) {
    return validarConRegex($email, $obligatorio, "/^[^@\s]+@[^@\s]+\.[^@\s.]{2,}$/",
                           "<-- El email no es válido!!");
}

// Nombre: mínimo 3 letras
function validarNombre($nombre) {
    return validarConRegex($nombre, true, "/^[\p{L} ]{3,}$/u",
                           "<-- El nombre debe tener mínimo 3 letras!!");
}

// Apellidos: primer apellido (mín. 3), un espacio y segundo apellido (mín. 3)
function validarApellidos($apellidos) {
    return validarConRegex($apellidos, true, "/^\p{L}{3,} \p{L}{3,}$/u",
                           "<-- Debe haber 2 apellidos de mínimo 3 letras separados por un espacio!!");
}

// Fecha escrita a mano con formato dd/mm/aaaa y que sea mayor de edad
function validarFechaMayorEdad($fecha) {
    if ($fecha == "") {
        return "<-- La fecha está vacía!!";
    }

    // Los paréntesis de la expresión regular guardan cada parte en $partes
    if (!preg_match("/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/", $fecha, $partes)) {
        return "<-- Formato incorrecto, usa dd/mm/aaaa!!";
    }
    // $partes[1] = día, $partes[2] = mes, $partes[3] = año
    if (!checkdate((int)$partes[2], (int)$partes[1], (int)$partes[3])) {
        return "<-- La fecha no existe!!";
    }

    $nacimiento = DateTime::createFromFormat("d/m/Y", $fecha);
    $hoy = new DateTime();
    if ($nacimiento > $hoy) {
        return "<-- La fecha no puede ser futura!!";
    }
    $edad = $nacimiento->diff($hoy)->y;   // años que hay entre las dos fechas
    if ($edad < 18) {
        return "<-- Debes ser mayor de edad!!";
    }
    return "";
}

// ---------- DNI ----------
function validarDni($dni) {
    if ($dni == "") {
        return "<-- El DNI está vacío!!";
    }
    if (!preg_match("/^[0-9]{8}[A-Za-z]$/", $dni)) {
        return "<-- El DNI debe tener 8 números y una letra!!";
    }

    $numero = substr($dni, 0, 8);                 // los 8 números
    $letra = strtoupper(substr($dni, 8, 1));      // la letra, en mayúscula
    $letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    $letraCorrecta = $letras[$numero % 23];       // resto de dividir entre 23

    if ($letra != $letraCorrecta) {
        return "<-- La letra del DNI no es correcta!!";
    }
    return "";
}

// =====================================================
//  PROGRAMA PRINCIPAL
// =====================================================

$pantalla = "formulario";   // pantalla que se muestra: formulario o resultado
$datos = array();             // datos que se muestran en el resultado

// Valores iniciales
$nombre = "";
$apellidos = "";
$fecha = "";
$dni = "";
$email = "";

$errores = array(
    "nombre" => "",
    "apellidos" => "",
    "fecha" => "",
    "dni" => "",
    "email" => ""
);

if (isset($_POST["enviar"])) {

    // 1) Recojo los datos
    $nombre = limpiar($_POST["nombre"]);
    $apellidos = limpiar($_POST["apellidos"]);
    $fecha = limpiar($_POST["fecha"]);
    $dni = limpiar($_POST["dni"]);
    $email = limpiar($_POST["email"]);

    // 2) Los valido con la librería
    $errores["nombre"] = validarNombre($nombre);
    $errores["apellidos"] = validarApellidos($apellidos);
    $errores["fecha"] = validarFechaMayorEdad($fecha);
    $errores["dni"] = validarDni($dni);
    $errores["email"] = validarEmail($email, true);

    // 3) Si todo está bien, paso a la pantalla de resultado
    if (!hayErrores($errores)) {
        $datos = array(
            "Nombre" => $nombre,
            "Apellidos" => $apellidos,
            "Fecha de nacimiento" => $fecha,
            "DNI" => strtoupper($dni),
            "Email" => $email
        );
        $pantalla = "resultado";
    }
}

include "vista2.html";
?>
