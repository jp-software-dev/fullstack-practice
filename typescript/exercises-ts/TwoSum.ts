/**
 * Descripcion del Problema:
 * El problema a resolver es: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * En español: 
 * Dadas una matriz de enteros "nums" y un número entero "target", debemos retornar los índices 
 * de los dos números que sumen exactamente el valor de "target".
 * 
 * Solucion Optima (Usando un Map / Tabla Hash):
 * Recorremos el arreglo una sola vez. Para cada número, calculamos su "complemento" restando 
 * el número actual al "target". Verificamos si ese complemento ya lo guardamos antes en un mapa; 
 * si existe, retornamos su índice y el índice actual. Si no existe, guardamos el número actual 
 * con su índice en el mapa y continuamos.
 * 
 * Complejidad: 
 * - Temporal: O(n) -> Recorremos el arreglo una sola vez de forma lineal.
 * - Espacial: O(n) -> En el peor de los casos, almacenamos los elementos en el Map.
 */

class Solution {
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];

            if (map.has(complement)) {
                return [map.get(complement)!, i];
            }

            map.set(nums[i], i);
        }

        return [];
    }
}