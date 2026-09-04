"use strict";
/**
 * Descripcion del Problema:
 * Crear una calculadora interactiva en TypeScript que reciba los operandos
 * y el operador directamente como argumentos desde la terminal.
 *
 * Solucion:
 * 1. Capturar los argumentos de la línea de comandos usando `process.argv`.
 * 2. Validar que se hayan ingresado los tres parámetros requeridos (num1, operador, num2).
 * 3. Convertir los argumentos numéricos y ejecutar la operación aritmética correspondiente.
 */
// Implementamos la clase Calculator con un método para realizar cálculos
class Calculator {
    calculate(num1, num2, operator) {
        // Validamos que los numeros y el operador sean correctos
        if (isNaN(num1) || isNaN(num2)) {
            return "Error: Los operandos deben ser números válidos.";
        }
        // Realizamos operaciónes según el operador proporcionado
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                if (num2 === 0) {
                    return "Error: División entre cero no permitida.";
                }
                return num1 / num2;
            default:
                return "Error: Operador no válido (usa +, -, *, /).";
        }
    }
}
// Capturamos los argumentos de la línea de comandos
const args = process.argv.slice(2);
if (args.length !== 3) {
    console.log("Error: Debes proporcionar exactamente tres argumentos: num1 operador num2");
    console.log("Ejemplo de uso: node CalculatorBasic.js 5 + 3");
    process.exit(1);
}
// Convertimos los argumentos a los tipos adecuados
const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);
const calculator = new Calculator();
const result = calculator.calculate(num1, num2, operator);
console.log(`Resultado: ${result}`);
