let products = [
    { id: 1, name: "Memoria RAM 16GB", price: 85},
    { id: 2, name: "Disco Estado Solido 1TB", price: 120}
];

let nextId = 3;

module.exports = {
    products,
    getNextId: () => nextId++
}