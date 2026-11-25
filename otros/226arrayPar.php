
<?php

function esPar(int $num): bool {
    return $num % 2 == 0;
}


function arrayAleatorio(int $tam, int $min, int $max): array {

    $array = [];

    for ($i = 0; $i < $tam; $i++) {
        $array[] = rand($min, $max);
    }

    return $array;
}


function arrayPares(array &$array): int {

    $cantidadPares = 0;

    foreach ($array as &$numero) {

        if (esPar($numero)) {
            $cantidadPares++;
            $numero = 0;
        }
    }

    return $cantidadPares;
}


echo "<h2>Ejercicio 226</h2>";


echo "<h3>Array aleatorio</h3>";

$array = arrayAleatorio(10, 1, 20);

echo "Array original: ";
print_r($array);

echo "<br><br>";


$cantidad = arrayPares($array);

echo "Cantidad de números pares: $cantidad";

echo "<br>";

echo "Array después de sustituir los pares por 0: ";
print_r($array);

echo "<h3>Prueba de esPar()</h3>";

$num = 8;

if (esPar($num)) {
    echo "$num es par";
} else {
    echo "$num es impar";
}


// -------------------------------------------------
// ARGUMENTOS CON NOMBRE
// -------------------------------------------------

echo "<h3>Argumentos con nombre</h3>";

$array2 = arrayAleatorio(
    tam: 8,
    min: 1,
    max: 30
);

echo "Array generado: ";
print_r($array2);

echo "<br><br>";

$cantidad2 = arrayPares(array: $array2);

echo "Cantidad de pares: $cantidad2";

?>