// URL del backend
const API_URL = 'http://localhost:4000/api/items';

// Selectores del DOM
const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const editProductId = document.getElementById('editProductId'); // Nuevo selector
const submitBtn = document.getElementById('submitBtn'); // Nuevo selector

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
                <!-- Se agregó el botón de Editar con su evento onclick -->
                <button class="btn btn-sm btn-outline-warning" onclick="loadProductData(${product.id}, '${product.name}', ${product.price})">Editar</button>
                <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
            </td>
        `;
        productList.appendChild(tr);
    });
}

// Nueva función: Cargar datos en el formulario para editar
function loadProductData(id, name, price) {
    editProductId.value = id;
    nameInput.value = name;
    priceInput.value = price;
    submitBtn.innerText = 'Guardar Cambios'; // Cambia el texto del botón
}

// Evento para manejar el envío del formulario (Crear o Actualizar)
productForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const id = editProductId.value; // Revisa si hay un ID oculto
    const productData = {
        name: nameInput.value,
        price: parseFloat(priceInput.value)
    };

    // Si hay un ID hacemos PUT (actualizar), si no hay hacemos POST (crear)
    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        });

        if (response.ok) {
            // Limpiar formulario y restaurar el estado original
            productForm.reset();
            editProductId.value = '';
            submitBtn.innerText = 'Añadir al Inventario';
            fetchProducts();
        }
    } catch (error) {
        console.error('Error al guardar/actualizar:', error);
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