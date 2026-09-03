/**
 * Descripcion del Problema:
 * El problema a resolver es: Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
 * 
 * En espanol: 
 * Dado un arreglo de numeros enteros llamado "nums", debemos retornar "true" si cualquier valor 
 * aparece mas de una vez en el arreglo, y retornar "false" en caso contrario (si todos son unicos).
 * 
 * Solucion Optima (Usando un Set):
 * Recorremos el arreglo utilizando un objeto Set para almacenar los numeros que ya hemos visto. 
 * Si encontramos un numero que ya esta en el Set, significa que hay un duplicado y retornamos true.
 * Si el ciclo termina sin coincidencias, retornamos false.
 * 
 * Complejidad: 
 * - Temporal: O(n) -> Recorremos el arreglo una sola vez.
 * - Espacial: O(n) -> Almacenamos elementos unicos en memoria.
 */

class Solution {

    hasDuplicate(nums: number[]): boolean {

        const seen = new Set<number>();

        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }
}