/**
 * Descripcion del Problema:
 * Escribir un programa que reciba dos numeros enteros, calcule su suma y retorne el resultado.
 * 
 * Solucion:
 * 1. Crear un metodo que reciba dos parametros de tipo entero (a y b).
 * 2. Utilizar el operador aritmetico '+' para realizar la adicion.
 * 3. Retornar el valor calculado e imprimirlo en la consola.
 * 
 * Complejidad:
 * - Temporal: O(1) -> La operacion aritmetica toma un tiempo constante.
 * - Espacial: O(1) -> No se utiliza memoria adicional dinamica.
 */
package Suma;

public class SumCalculator {

    // Metodo que realiza la logica de la suma
    public int addNumbers(int a, int b) {
        return a + b;
    }

    // Metodo principal para ejecutar y probar el codigo
    public static void main(String[] args) {
        // Instanciamos la clase para poder usar sus metodos
        SumCalculator calculator = new SumCalculator();
        
        // Definimos los numeros a sumar
        int number1 = 45;
        int number2 = 82;
        
        // Llamamos al metodo y guardamos el resultado
        int result = calculator.addNumbers(number1, number2);
        
        // Imprimimos el resultado en la terminal
        System.out.println("El resultado de sumar " + number1 + " + " + number2 + " es: " + result);
    }
}