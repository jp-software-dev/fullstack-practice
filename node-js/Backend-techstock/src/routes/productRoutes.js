// Importar dependencias de Express y el controlador correspondiente
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Ruta para obtener el listado de productos
router.get('/', productController.getProducts);

// Ruta para registrar un nuevo producto
router.post('/', productController.createProduct);

// Ruta para eliminar un producto mediante su identificador
router.delete('/:id', productController.deleteProduct);

// Exportar el enrutador
module.exports = router;