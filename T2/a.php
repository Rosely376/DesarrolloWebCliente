<?php

// 227parametrosVariables.php - Crea una función mayor que reciba un número variable de parámetros y devuelva el mayor. Crea también una función concatenar que reciba un número variable de palabras y las concatene.

function mayor(): int {
    $numeros = func_get_args();

    $mayor = $numeros[0];

    foreach ($numeros as $numero) {
        if ($numero > $mayor) {
            $mayor = $numero;
        }
    }

    return $mayor;
}

function concatenar(...$palabras): string {
    $resultado = "";

    foreach ($palabras as $palabra) {
        $resultado .= $palabra . " ";
    }

    return trim($resultado);
}

$resultado1 = mayor(4, 8, 2, 10, 5);

echo "El número mayor es: " . $resultado1;
echo "<br>";

$resultado2 = mayor(15, 3, 27, 9, 6, 20);

echo "El número mayor es: " . $resultado2;
echo "<br><br>";

$texto1 = concatenar("PHP", "es", "un", "lenguaje", "de", "programación");

echo $texto1;
echo "<br>";

$texto2 = concatenar("Hola", "mundo");

echo $texto2;

?>

<?php

// 228arrayFunciones.php - Crea un array que contenga los nombres de las funciones de la biblioteca anterior y utiliza las funciones mediante sus nombres para realizar las operaciones con dos números recibidos por la URL.

require "228biblioteca.php";

$num1 = (int) $_GET["num1"];
$num2 = (int) $_GET["num2"];

$funciones = [
    "sumar",
    "restar",
    "multiplicar",
    "dividir"
];

foreach ($funciones as $funcion) {
    if ($funcion === "dividir" && $num2 === 0) {
        echo "No se puede dividir entre 0.<br>";
        continue;
    }

    $resultado = $funcion($num1, $num2);

    echo $funcion . ": " . $resultado . "<br>";
}

?>


<?php

// 229matematicas.php - Crea las funciones digitos, digitoN, quitaPorDetras y quitaPorDelante para trabajar con los dígitos de un número.

function digitos(int $num): int {
    $num = abs($num);

    $texto = (string) $num;

    return strlen($texto);
}

function digitoN(int $num, int $pos): int {
    $texto = (string) abs($num);

    return (int) $texto[$pos - 1];
}

function quitaPorDetras(int $num, int $cant): int {
    $texto = (string) abs($num);

    $cantidadConservar = strlen($texto) - $cant;

    if ($cantidadConservar <= 0) {
        return 0;
    }

    return (int) substr($texto, 0, $cantidadConservar);
}

function quitaPorDelante(int $num, int $cant): int {
    $texto = (string) abs($num);

    if ($cant >= strlen($texto)) {
        return 0;
    }

    return (int) substr($texto, $cant);
}

echo "Número de dígitos de 12345: ";
echo digitos(12345);

echo "<br>";

echo "Número de dígitos de 987654: ";
echo digitos(num: 987654);

echo "<br><br>";

echo "Dígito de la posición 3 de 123456: ";
echo digitoN(123456, 3);

echo "<br>";

echo "Dígito de la posición 5 de 987654: ";
echo digitoN(num: 987654, pos: 5);

echo "<br><br>";

echo "123456 quitando 2 dígitos por detrás: ";
echo quitaPorDetras(123456, 2);

echo "<br>";

echo "987654 quitando 3 dígitos por detrás: ";
echo quitaPorDetras(num: 987654, cant: 3);

echo "<br><br>";

echo "123456 quitando 2 dígitos por delante: ";
echo quitaPorDelante(123456, 2);

echo "<br>";

echo "987654 quitando 3 dígitos por delante: ";
echo quitaPorDelante(num: 987654, cant: 3);

?>





