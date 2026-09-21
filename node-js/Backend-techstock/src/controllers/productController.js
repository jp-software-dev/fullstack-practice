const { products, getNextId } = require('../models/productModel');

// Obtener todos los productos del inventario
const getProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: products
    });
};

// Crear y registrar un nuevo producto
const createProduct = (req, res) => {
    const { name, price } = req.body;

    // Validar que los campos no esten vacios
    if (!name || !price) {
        return res.status(400).json({ error: 'Nombre y precio son obligatorios' });
    }

    const newProduct = {
        id: getNextId(),
        name,
        price: Number(price)
    };

    products.push(newProduct);

    res.status(201).json({
        status: 'success',
        data: newProduct
    });
};

// Eliminar un producto por su identificador
const deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === parseInt(id));

    // Validar si el producto existe antes de borrar
    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    products.splice(index, 1);

    res.status(200).json({
        status: 'success',
        message: 'Producto eliminado exitosamente'
    });
};

module.exports = {
    getProducts,
    createProduct,
    deleteProduct
};