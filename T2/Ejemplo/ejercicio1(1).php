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

// Solo letras y espacios
function validarAlfabetico($texto, $obligatorio) {
    return validarConRegex($texto, $obligatorio, "/^[\p{L} ]+$/u",
                           "<-- Solo se permiten letras!!");
}

// Letras, números y espacios
function validarAlfanumerico($texto, $obligatorio) {
    return validarConRegex($texto, $obligatorio, "/^[\p{L}0-9 ]+$/u",
                           "<-- Solo se permiten letras y números!!");
}

// Teléfono español: 9 dígitos, empieza por 6, 7, 8 o 9
function validarTelefono($telefono, $obligatorio) {
    return validarConRegex($telefono, $obligatorio, "/^[6-9][0-9]{8}$/",
                           "<-- El teléfono debe tener 9 dígitos!!");
}

// Email: 1 o más caracteres, @, 1 o más caracteres, punto y 2 o más caracteres
function validarEmail($email, $obligatorio) {
    return validarConRegex($email, $obligatorio, "/^[^@\s]+@[^@\s]+\.[^@\s.]{2,}$/",
                           "<-- El email no es válido!!");
}

// Contraseña: obligatoria y mínimo 8 caracteres
function validarPassword($password) {
    if ($password == "") {
        return "<-- La contraseña está vacía!!";
    }
    if (strlen($password) < 8) {
        return "<-- La contraseña debe tener mínimo 8 caracteres!!";
    }
    return "";
}

// Fecha de un <input type="date"> (llega como aaaa-mm-dd)
function validarFecha($fecha, $obligatorio) {
    if ($fecha == "") {
        if ($obligatorio) {
            return "<-- La fecha está vacía!!";
        }
        return "";
    }
    $partes = explode("-", $fecha);   // "2000-05-12" -> ["2000","05","12"]
    if (count($partes) != 3 || !checkdate((int)$partes[1], (int)$partes[2], (int)$partes[0])) {
        return "<-- La fecha no es válida!!";
    }
    return "";
}

// $permitidos: array con los valores válidos del radio
function validarRadio($valor, $permitidos) {
    if ($valor == "") {
        return "<-- Debe elegir una opción!!";
    }
    if (!in_array($valor, $permitidos)) {
        return "<-- Opción no válida!!";
    }
    return "";
}

// La primera opción ("Seleccione") tiene value="0" y no se puede elegir
function validarCombo($valor) {
    if ($valor == "" || $valor == "0") {
        return "<-- Debe elegir una opción distinta de la primera!!";
    }
    return "";
}

// Número mínimo y máximo de checks marcados
function validarChecks($checks, $min, $max) {
    $total = count($checks);
    if ($total < $min) {
        return "<-- Debe marcar al menos $min!!";
    }
    if ($total > $max) {
        return "<-- Debe marcar como máximo $max!!";
    }
    return "";
}

// Recibe $_FILES["nombre_del_input"]
function validarArchivo($archivo) {
    if ($archivo["error"] == UPLOAD_ERR_NO_FILE) {
        return "<-- Debe seleccionar un archivo!!";
    }
    if ($archivo["error"] != UPLOAD_ERR_OK) {
        return "<-- Error al subir el archivo!!";
    }
    return "";
}

// =====================================================
//  PROGRAMA PRINCIPAL
// =====================================================

$pantalla = "formulario";   // pantalla que se muestra: formulario o resultado
$datos = array();             // datos que se muestran en el resultado

// Valores iniciales: el formulario aparece vacío la primera vez
$alfabetico = "";
$alfabeticoOpc = "";
$alfanumerico = "";
$alfanumericoOpc = "";
$fecha = "";
$fechaOpc = "";
$radio = "";
$combo = "";
$checks = array();
$telefono = "";
$email = "";
$password = "";

// Un mensaje de error por campo (vacío = sin error)
$errores = array(
    "alfabetico" => "",
    "alfabeticoOpc" => "",
    "alfanumerico" => "",
    "alfanumericoOpc" => "",
    "fecha" => "",
    "fechaOpc" => "",
    "radio" => "",
    "combo" => "",
    "checks" => "",
    "telefono" => "",
    "email" => "",
    "password" => "",
    "documento" => ""
);

// Solo valido cuando se ha pulsado el botón Enviar
if (isset($_POST["enviar"])) {

    // 1) Recojo los datos
    $alfabetico = limpiar($_POST["alfabetico"]);
    $alfabeticoOpc = limpiar($_POST["alfabetico_opc"]);
    $alfanumerico = limpiar($_POST["alfanumerico"]);
    $alfanumericoOpc = limpiar($_POST["alfanumerico_opc"]);
    $fecha = limpiar($_POST["fecha"]);
    $fechaOpc = limpiar($_POST["fecha_opc"]);
    $combo = limpiar($_POST["combo"]);
    $telefono = limpiar($_POST["telefono"]);
    $email = limpiar($_POST["email"]);
    $password = $_POST["password"];

    // El radio y los checks no existen en $_POST si no se marca nada
    if (isset($_POST["radio"])) {
        $radio = limpiar($_POST["radio"]);
    }
    if (isset($_POST["checks"])) {
        $checks = $_POST["checks"];
    }

    // 2) Los valido con mi librería
    $errores["alfabetico"] = validarAlfabetico($alfabetico, true);
    $errores["alfabeticoOpc"] = validarAlfabetico($alfabeticoOpc, false);
    $errores["alfanumerico"] = validarAlfanumerico($alfanumerico, true);
    $errores["alfanumericoOpc"] = validarAlfanumerico($alfanumericoOpc, false);
    $errores["fecha"] = validarFecha($fecha, true);
    $errores["fechaOpc"] = validarFecha($fechaOpc, false);
    $errores["radio"] = validarRadio($radio, array("Opcion1", "Opcion2", "Opcion3"));
    $errores["combo"] = validarCombo($combo);
    $errores["checks"] = validarChecks($checks, 1, 3);
    $errores["telefono"] = validarTelefono($telefono, true);
    $errores["email"] = validarEmail($email, true);
    $errores["password"] = validarPassword($password);
    $errores["documento"] = validarArchivo($_FILES["documento"]);

    // 3) Si no hay ningún error, paso a la pantalla de resultado
    if (!hayErrores($errores)) {

        // Guardo el archivo subido en la carpeta uploads
        if (!is_dir("uploads")) {
            mkdir("uploads");
        }
        $nombreArchivo = basename($_FILES["documento"]["name"]);
        move_uploaded_file($_FILES["documento"]["tmp_name"], "uploads/" . $nombreArchivo);

        // Guardo los datos que se van a mostrar en la pantalla de resultado
        $datos = array(
            "Alfabético" => $alfabetico,
            "Alfabético opcional" => $alfabeticoOpc,
            "Alfanumérico" => $alfanumerico,
            "Alfanumérico opcional" => $alfanumericoOpc,
            "Fecha" => $fecha,
            "Fecha opcional" => $fechaOpc,
            "Radio" => $radio,
            "Opción elegida" => $combo,
            "Checks" => implode(", ", $checks),
            "Teléfono" => $telefono,
            "Email" => $email,
            "Contraseña" => str_repeat("*", strlen($password)),
            "Documento" => $nombreArchivo
        );

        $pantalla = "resultado";
    }
}

// Pinto la pantalla (el HTML está en otro fichero)
include "vista1.html";
?>
