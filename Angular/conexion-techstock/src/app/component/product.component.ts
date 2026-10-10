import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
    private productService = inject(ProductService);

    products = signal<Product[]>([]);
    product = signal<Product>({
        name: '', price: 0,
        id: 0
    });
    editMode = signal(false);

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.productService.getProducts().subscribe({
            next: (res) => this.products.set(res.data),
            error: (err) => console.error('Error al conectar con la API:', err)
        });
    }

    saveProduct(): void {
        const currentProduct = this.product();
        if (!currentProduct.name || !currentProduct.price) return;

        if (this.editMode() && currentProduct.id) {
          this.productService.updateProduct(currentProduct.id, currentProduct).subscribe(() => {
            this.resetForm();
            this.loadProducts();
          });
        } else {
          this.productService.createProduct(currentProduct).subscribe(() => {
            this.resetForm();
            this.loadProducts();
          });
        }
    }

    editProduct(p: Product): void {
        this.product.set({ ...p });
        this.editMode.set(true);
    }

    deleteProduct(id?: number): void {
        if (!id || !confirm('¿Eliminar este producto?')) return;
        this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
    }

    resetForm(): void {
        this.product.set({
            name: '', price: 0,
            id: 0
        });
        this.editMode.set(false);
    }
}