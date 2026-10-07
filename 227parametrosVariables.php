```php
<?php

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

echo "<h2>Ejercicio 227</h2>";

$resultado = mayor(8, 15, 3, 27, 10);

echo "El número mayor es: $resultado";

echo "<h3>Función concatenar()</h3>";

echo concatenar("Hola", "me", "llamo", "Rosely");

echo "<br>";

echo concatenar(
    palabras: ["PHP", "es", "interesante"]
);

?>
