// Importar dependencias
const express = require('express');
const cors = require('cors');
const productRoutes = require('./src/routes/productRoutes');

// Crear una instancia de la aplicación Express
const app = express();
const PORT = 4000;

// Configurar middlewares
app.use(cors());
app.use(express.json());

// Configurar rutas principales de la API
app.use('/api/items', productRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});