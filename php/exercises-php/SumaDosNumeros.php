<?php
/**
 * Descripción del Problema:
 * Dado un problema básico donde se requieren calcular métricas o totales rápidos
 * sin recargar la página o procesar lógica compleja, necesitamos una función
 * pura que tome dos números enteros o flotantes y devuelva su suma exacta.
 * 
 * En español:
 * Dados dos números `num1` y `num2`, debemos retornar el resultado de sumar
 * ambos valores.
 * 
 * Solución Óptima:
 * Utilizar el operador aritmético básico de adición (+). En PHP podemos
 * tipar los parámetros y el retorno para garantizar la integridad de los datos.
 * 
 * Complejidad:
 * - Temporal: O(1) -> La operación de adición se ejecuta en tiempo constante.
 * - Espacial: O(1) -> No se requiere memoria adicional.
 */

function sumarDosNumeros(float $num1, float $num2): float {
    return $num1 + $num2;
}

$numeroA = 245.5;
$numeroB = 254.5;
$resultado = sumarDosNumeros($numeroA, $numeroB);

echo "La suma de $numeroA y $numeroB es: $resultado";
?>