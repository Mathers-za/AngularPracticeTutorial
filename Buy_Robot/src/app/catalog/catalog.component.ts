import { Component } from '@angular/core';
import { IProductModel } from './productsModel';
import { products } from './products-data';
import { CommonModule, NgFor, NgIf, NgClass } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

import { Cart_Service } from '../services/cart-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bot-catalog',
  standalone: true,
  imports: [NgFor, CommonModule, NgIf, NgClass, ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  products: IProductModel[] = products;
  filter = '';

  constructor(private cartService: Cart_Service, http: HttpClient) {}
  getFilteredProducts(): IProductModel[] {
    return this.filter === ''
      ? this.products
      : this.products.filter(
          (product) =>
            product.category.toLocaleLowerCase() ===
            this.filter.toLocaleLowerCase()
        );
  }

  addToCart(product: IProductModel) {
    this.cartService.add(product);
  }

  getCart() {
    this.cartService.get();
  }
}
