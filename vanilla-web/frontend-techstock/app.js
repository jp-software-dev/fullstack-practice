// URL del backend
const API_URL = 'http://localhost:4000/api/items';

// Selectores del DOM
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');

// Función para obtener productos desde el backend
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'success') {
            renderProducts(data.data);
        }
    } catch (error) {
        console.error('Error', error);
        productList.innerHTML = '<tr><td colspan="4" class="text-center text-danger">Error de conexión con el backend.</td></tr>';
    }
}

// Función para renderizar productos en la tabla
function renderProducts(products) {
    productList.innerHTML = '';

    if (products.length === 0) {
        productList.innerHTML = '<tr><td colspan="4" class="text-center text-muted">No hay componentes en el inventario.</td></tr>';
        return;
    }

    // Renderizar cada producto en la tabla
    products.forEach(product => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-muted">#${product.id}</td>
            <td class="fw-bold text-primary">${product.name}</td>
            <td>$${product.price.toFixed(2)} USD</td>
            <td class="text-end">
                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;
        productList.appendChild(tr);
    });
}

// Evento para manejar el envío del formulario y guardar un nuevo producto
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const newProduct = {
        name: nameInput.value,
        price: parseFloat(priceInput.value)
    };

    // Validar que los campos no estén vacíos
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });

        if (response.ok) {
            productForm.reset();
            fetchProducts();
        }
    } catch (error) {
        console.error('Error al guardar:', error);
    }
});

// Función para eliminar un producto
async function deleteProduct(id) {
    if (!confirm('¿Seguro que deseas eliminar este componente?')) return;

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            fetchProducts();
        }
    } catch (error) {
        console.error('Error al eliminar:', error);
    }
}       

// Inicializar la carga de datos al abrir la página
document.addEventListener('DOMContentLoaded', fetchProducts);