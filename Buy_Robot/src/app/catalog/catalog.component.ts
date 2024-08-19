import { Component } from '@angular/core';
import { IProductModel } from './productsModel';
import { products } from './products-data';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'bot-catalog',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  products: IProductModel[] = products;

  createUrl(product: IProductModel): string {
    return `/images/robot-parts/${product.imageName}`;
  }
}
