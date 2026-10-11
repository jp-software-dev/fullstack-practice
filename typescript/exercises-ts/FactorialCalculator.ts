/**
 * Descripcion del Problema:
 * El problema a resolver es: Given a non-negative integer n, compute its factorial using an iterative approach.
 * 
 * En español: 
 * Dado un número entero no negativo "n", debemos calcular su factorial utilizando un enfoque iterativo 
 * (bucle for) y retornar el resultado numérico.
 * 
 * Solucion Optima (Usando un bucle iterativo):
 * Primero validamos si el número es negativo; en caso de serlo, retornamos un mensaje de error o manejamos la excepción.
 * Inicializamos una variable acumuladora en 1.
 * Luego utilizamos un bucle "for" desde 1 hasta "n", multiplicando el acumulador por cada valor iterado.
 * Finalmente, retornamos el valor acumulado con el resultado del factorial.
 * 
 * Complejidad: 
 * - Temporal: O(n) -> El bucle se ejecuta linealmente "n" veces según el número ingresado.
 * - Espacial: O(1) -> Solo utilizamos una variable auxiliar acumuladora, por lo que el espacio en memoria es constante.
 */

class FactorialCalculator {
    calcularFactorial(n: number): number | string {
        if (n < 0) {
            return "El factorial no está definido para números negativos.";
        }

        let resultado: number = 1;

        for (let i = 1; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}