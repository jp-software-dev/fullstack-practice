/**
 * Descripcion del Problema:
 * El problema a resolver es: Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false[cite: 2].
 * 
 * En espanol: 
 * Dadas dos cadenas de texto "s" y "t", debemos retornar "true" si ambas cadenas son anagramas 
 * la una de la otra (contienen los mismos caracteres con la misma frecuencia, sin importar el orden), 
 * y retornar "false" en caso contrario.
 * 
 * Solucion Optima (Usando un Map/Tabla Hash):
 * Primero validamos las longitudes; si son diferentes, es imposible que sean anagramas y retornamos false.
 * Luego recorremos la cadena "s" utilizando un objeto Map para contar cuántas veces aparece cada letra.
 * Después recorremos la cadena "t" verificando las frecuencias en el Map. Si una letra no existe 
 * o su contador ya es cero, significa que las cadenas no coinciden y retornamos false. Si la letra existe, le restamos 1 a su contador.
 * Si el ciclo termina sin encontrar diferencias, retornamos true.
 * 
 * Complejidad: 
 * - Temporal: O(n + m) -> Recorremos ambas cadenas de forma lineal[cite: 2].
 * - Espacial: O(1) -> Aunque usamos un Map, el número máximo de claves se limita a las letras minúsculas del alfabeto inglés, por lo que el espacio en memoria no crece infinitamente y se considera constante[cite: 2].
 */

class Solution {

    isAnagram(s:string, t:string): boolean {
  if(s.length !== t.length){
    return false;
  }

  const counts = new Map<string, number>();

  for(const char of s){
      counts.set(char,(counts.get(char) ?? 0) +1);
  }

  for(const char of t){
  const previous = counts.get(char);

    if(!previous){
      return false;
}
    counts.set(char,previous -1);
    
  }
  return true;
}

}