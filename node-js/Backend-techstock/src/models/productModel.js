// Arreglo temporal que simula una base de datos en memoria
let products = [
    { id: 1, name: "Memoria RAM 16GB", price: 85},
    { id: 2, name: "Disco Estado Solido 1TB", price: 120}
];

// Control de identificadores auto-incrementales
let nextId = 3;

// Exportar el modelo de datos y la funcion generadora
module.exports = {
    products,
    getNextId: () => nextId++
}