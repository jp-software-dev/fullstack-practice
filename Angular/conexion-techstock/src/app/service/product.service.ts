import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

// Esta clase es un servicio de Angular que proporciona métodos para interactuar con una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos. Utiliza HttpClient para enviar solicitudes HTTP al servidor y devuelve observables que permiten a los componentes suscribirse a los resultados de las operaciones.
@Injectable({
  providedIn: 'root'
})

// La clase ProductService es un servicio de Angular que proporciona métodos para interactuar con una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos. Utiliza HttpClient para enviar solicitudes HTTP al servidor y devuelve observables que permiten a los componentes suscribirse a los resultados de las operaciones.
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000/api/items';

  // El método getProducts() realiza una solicitud HTTP GET a la API para obtener una lista de productos. Devuelve un observable que emite un objeto con el estado de la solicitud y los datos de los productos.
  getProducts(): Observable<{ status: string; data: Product[] }> {
    return this.http.get<{ status: string; data: Product[] }>(this.apiUrl);
  }

  // El método createProduct(product: Product) realiza una solicitud HTTP POST a la API para crear un nuevo producto. Devuelve un observable que emite un objeto con el estado de la solicitud y los datos del producto creado.
  createProduct(product: Product): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  // El método updateProduct(id: number, product: Product) realiza una solicitud HTTP PUT a la API para actualizar un producto específico por su ID. Devuelve un observable que emite un objeto con el estado de la solicitud y los datos del producto actualizado.
  updateProduct(id: number, product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

  // El método deleteProduct(id: number) realiza una solicitud HTTP DELETE a la API para eliminar un producto específico por su ID. Devuelve un observable que emite un objeto con el estado de la solicitud y los datos del producto eliminado.
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}