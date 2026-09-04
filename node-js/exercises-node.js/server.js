/**
 * Descripcion del Problema:
 * Crear un servidor HTTP basico utilizando Node.js puro para entender el ciclo 
 * de peticion y respuesta (request/response) sin frameworks externos.
 * 
 * Solucion:
 * 1. Importar el modulo nativo 'http' que viene incluido con Node.js.
 * 2. Crear un servidor con `http.createServer()` que procese las peticiones entrantes.
 * 3. Enviar una respuesta con formato JSON y un codigo de estado HTTP 200 (OK).
 * 
 * Complejidad:
 * - Temporal: O(1) por cada peticion manejada de forma directa.
 * - Espacial: O(1) uso de memoria constante por respuesta.
 */

const http = require('http');

// Definimos el puerto en el que el servidor escuchará las peticiones
const PORT = 3000;

// Creamos el servidor HTTP
const server = http.createServer((req, res) => {
    // Configuramos la cabecera de la respuesta para indicar que es JSON y UTF-8
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });

    // Creamos un objeto con la información que queremos enviar en la respuesta
    const responseData = {
        status: 'success',
        message: "¡Hola Mundo desde el backend con Node.js!",
        endpoint: req.url,
        timestamp: new Date().toISOString() 
    };

    // Enviamos la respuesta al cliente en formato JSON
    res.end(JSON.stringify(responseData, null, 2))
});

// Iniciamos el servidor y escuchamos en el puerto definido
server.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});